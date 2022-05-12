import { Mock, MockApiResult } from "../../../@types/services-mock";
import { mocks } from "./mock";

/**
 * @abstract Request for an external api, defaults to a Mock if no the request fails
 * @default type Mock = {
    "51.219448,4.402464": Antwerp;
    "43.653225,-79.383186": Toronto;
    "41.878113,-87.629799": Chicago;
    "37.7749295,-122.4194155": SanFrancisco;
}
 * @param location_ 
 * @returns 
 */
export const restaurantRequest = <T extends keyof Mock>(location_: T) => {
   const mock_ = mocks[location_];

   return new Promise<Mock[T]>((resolve, reject) => {
      if (!mock_) reject("Not found");
      resolve(mock_);
   });
};

/**
 * @abstract Transforms the restaurant data by mapping and adding extra properties
 * @param results_ 
 * @returns 
 */
export const restaurantsTransform = <T extends MockApiResult[]>(
   results_: T
) => {
   if (!results_) return [];

   const mappedResults = results_.map((restaurant) => {
      return {
         ...restaurant,
         isOpenNow:
            restaurant.opening_hours && restaurant.opening_hours.open_now,
         isClosedTemporarily:
            restaurant.business_status === "CLOSED_TEMPORARILY"
      };
   });

   //? Camelize
   return mappedResults;
};
