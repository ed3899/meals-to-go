import React, { useEffect, createContext, useState, useMemo } from "react";

import type { RestaurantContextT } from "../../../@types";

import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";

export const RestaurantContext = createContext<RestaurantContextT>({
   restaurants: [],
   isLoading: false,
   error: { error: false, msg: "" }
});

/**
 * @abstract Wraps around the application providing a restaurant context
 * @param param0
 * @returns
 */
export const RestaurantContextProvider: React.FC = ({ children }) => {
   const [restaurants, setRestaurants] = useState<
      ReturnType<typeof restaurantsTransform>
   >([]);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<RestaurantContextT["error"]>({
      error: false,
      msg: ""
   });

   const retrieveRestaurants = () => {
      setIsLoading(true);
      setTimeout(() => {
         restaurantsRequest("37.7749295,-122.4194155")
            .then((restaurant) => {
               const transformedRestaurantResults = restaurantsTransform(
                  restaurant.results
               );
               //// Guarding against empty array in the UI
               setRestaurants(transformedRestaurantResults);
            })
            .catch((err) => {
               setIsLoading(false);
               setError({ error: true, msg: err });
            })
            .finally(() => setIsLoading(false));
      }, 2000);
   };

   useEffect(() => {
      retrieveRestaurants();
   }, []);

   return (
      <RestaurantContext.Provider
         value={{
            restaurants: restaurants,
            isLoading: isLoading,
            error: error
         }}
      >
         {children}
      </RestaurantContext.Provider>
   );
};
