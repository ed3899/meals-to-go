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
   const [location, setLocation] = useState<LocationContextT["location"]>({
      lat: 37.7749295,
      lng: -122.4194155
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

      if (!searchKeyword.length) return;

      //! Fix once Google Api in place
      locationRequest(searchKeyword)
         ?.then(locationTransform)
         .then(res => {
            setIsLoading(false);
            setLocation(res);
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
