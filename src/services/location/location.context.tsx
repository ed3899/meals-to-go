import React, { createContext, useEffect, useState } from "react";

import type { LocationContextT } from "../../../@types";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext<LocationContextT>({
   isLoading: false,
   error: { isError: false, msg: "" },
   location: "",
   search: () => "", //!
   keyword: ""
});

export const LocationContextProvider: React.FC = ({ children }) => {
   const [location, setLocation] =
      useState<LocationContextT["location"]>("san francisco");
   const [keyword, setKeyword] = useState<LocationContextT["keyword"]>();
   const [isLoading, setIsLoading] =
      useState<LocationContextT["isLoading"]>(false);
   const [error, setError] = useState<LocationContextT["error"]>({
      isError: false,
      msg: ""
   });

   const onSearch = (searchKeyword?: string) => {
      setIsLoading(true);
      setKeyword(searchKeyword);

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

   useEffect(() => {
      onSearch(keyword);
   }, []);

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
