import { RestaurantInfoCard, TransformedCard } from "../../../@types";
import { mocks } from "./mock";
import { Mock, MockApiResult } from "./restaurant.service.types";

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
export const restaurantsRequest = <T extends keyof Mock>(location_: T) => {
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
): TransformedCard[] => {
   if (!results_) return [];

   const mappedResults = results_.map((restaurant) => {
      return {
         name: restaurant.name,
         icon: restaurant.icon,
         photos: restaurant.photos,
         address: restaurant.vicinity,
         rating: restaurant.rating,
         isOpenNow:
            restaurant.opening_hours && restaurant.opening_hours.open_now,
         isClosedTemporarily:
            restaurant.business_status === "CLOSED_TEMPORARILY"
      };
   });

   //? Camelize
   return mappedResults;
};
