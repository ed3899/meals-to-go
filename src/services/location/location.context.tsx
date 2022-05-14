import React, { createContext, useEffect, useState } from "react";

import type { LocationContextT } from "../../../@types";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext<LocationContextT>({
   isLoading: false,
   error: { isError: false, msg: "" },
   location: {
      lat: 0,
      lng: 0
   },
   search: () => "", //!
   keyword: ""
});

export const LocationContextProvider: React.FC = ({ children }) => {
   /**
    * @default type Mock = {
    "51.219448,4.402464": Antwerp;
    "43.653225,-79.383186": Toronto;
    "41.878113,-87.629799": Chicago;
    "37.7749295,-122.4194155": SanFrancisco;
    */
   const [location, setLocation] = useState<LocationContextT["location"]>({
      lng: 4.402464,
      lat: 51.219448
   });

   const [keyword, setKeyword] =
      useState<LocationContextT["keyword"]>("San Francisco");

   const [isLoading, setIsLoading] =
      useState<LocationContextT["isLoading"]>(false);

   const [error, setError] = useState<LocationContextT["error"]>({
      isError: false,
      msg: ""
   });

   /**
    * @abstract Wrapper around locationRequest, set the state
    * @requires locationRequest
    * @param searchKeyword
    */
   const onSearch = (searchKeyword: string) => {
      setIsLoading(true);
      setKeyword(searchKeyword);

      // don't do anything
      if (!searchKeyword.length) return;

      //! Fix once Google Api in place
      locationRequest(searchKeyword)
         ?.then(locationTransform)
         .then(res => {
            setIsLoading(false);

            if (res) setLocation(res);
         })
         .catch(error => {
            setIsLoading(false);
            setError({
               isError: true,
               msg: error
            });
         })
         .finally(() => setIsLoading(false));
   };

   //    useEffect(() => {
   //       onSearch(keyword);
   //    }, []);

   return (
      <LocationContext.Provider
         value={{
            location: location,
            error: error,
            isLoading: isLoading,
            search: onSearch,
            keyword: keyword
         }}
      >
         {children}
      </LocationContext.Provider>
   );
};
