import type { LocationResults } from "../../../@types";

import { locations } from "./location.mock";

/**
 * @abstract Requests location from MockApi or external if indicated in the second parameter
 * @param searchTerm 
 * @param externalRequest 
 * @returns 
 */
export const locationRequest = <T extends keyof typeof locations | string>(
   searchTerm: T,
   externalRequest = false
): Promise<LocationResults> | undefined => {
   const notExternalRequest = () => !externalRequest;

   //? Internal logic for indentyfing if it is an external request
   if (notExternalRequest()) {
      return new Promise((resolve, reject) => {
         const locationMock = locations[searchTerm as keyof typeof locations];

         if (!locationMock) reject("Not found");

         resolve(locationMock);
      });
   }
};

/**
 * @abstract Retrieve the lattitude and longitude of the location if both exists
 * @param locationResults 
 * @returns 
 */
export const locationTransform = (locationResults: LocationResults) => {
   if (!locationResults.results || locationResults.results.length === 0) return;

   const { geometry } = locationResults.results[0];

   if ((geometry.location && geometry.location.lat) || geometry.location.lng)
      return;

   const {
      location: { lat, lng }
   } = geometry;

   return { lat, lng };
};
