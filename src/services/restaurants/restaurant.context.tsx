import React, {
   useEffect,
   createContext,
   useState,
   useContext
} from "react";

import type { RestaurantContextT } from "../../../@types";

import { LocationContext } from "../location/location.context";
import { mockImages } from "./mock";
import { restaurantsRequest, restaurantsTransform } from "./restaurant.service";
import {
   Antwerp,
   Chicago,
   SanFrancisco,
   Toronto
} from "./restaurant.service.types";

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

   const { location } = useContext(LocationContext);

   const retrieveRestaurants = (loc: string) => {
      setIsLoading(true);
      setRestaurants([]);

      setTimeout(() => {
         restaurantsRequest(loc)
            .then(restaurant => {
               //! Mocking

               const transformedRestaurantResults = restaurantsTransform(
                  restaurant.results,
                  mockImages
               );
               //? Guarding against empty array in the UI
               setRestaurants(transformedRestaurantResults);
            })
            .catch(err => {
               setIsLoading(false);
               setError({ error: true, msg: err });
            })
            .finally(() => setIsLoading(false));
      }, 2000);
   };

   useEffect(() => {
      if (location) {
         const locationString = `${location.lat},${location.lng}`;
         retrieveRestaurants(locationString);
      }
   }, [location]);

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
