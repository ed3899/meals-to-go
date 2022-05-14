import type { LocationResults } from "../../../@types";

import { locations } from "./location.mock";

/**
 * @abstract Requests location from MockApi or external if indicated in the second parameter
 * @description Test locations: antwerp , "san francisco", chicago, toronto
 * @default 
 * @param searchTerm
 * @returns
 */
export const locationRequest = (
   searchTerm: string
): Promise<LocationResults> => {
   const lowercasedSearchTerm = searchTerm.toLowerCase();

   //! Return only the mock for now
   //? Internal logic for indentyfing if it is an external request
   return new Promise((resolve, reject) => {
      const locationMock =
         locations[lowercasedSearchTerm as keyof typeof locations];

      if (!locationMock) reject("Not found");

      resolve(locationMock);
   });
};

/**
 * @abstract Retrieve the lattitude and longitude of the location if both exists
 * @param locationResults
 * @returns
 */
export const locationTransform = (locationResults: LocationResults) => {
   if (locationResults.results.length === 0) return;

   const { geometry } = locationResults.results[0];

   const {
      location: { lat, lng }
   } = geometry;

   return { lat, lng };
};
