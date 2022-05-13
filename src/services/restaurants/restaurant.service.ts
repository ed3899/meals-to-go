import { RestaurantInfoCardT } from "../../../@types";
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
export const restaurantsRequest = <T extends keyof Mock & string>( //! Change to accept any string
   location_: T
) => {
   const mock_ = mocks[location_];

   return new Promise<Mock[T]>((resolve, reject) => {
      if (!mock_) reject("Not found");
      resolve(mock_);
   });
};


/**
 * @abstract Gets a random image
 * @description Gets a random string from an array of strings
 * @internal
 * @param mockImages
 * @returns
 */
const getRandomMockImage = (mockImages: string[]) => {
   const randomizer = Math.random() * (mockImages.length - 1);
   const randomImg = mockImages[Math.ceil(randomizer)];

   return randomImg;
};

/**
 * @abstract Transforms the restaurant data by mapping and adding extra properties
 * @param results
 * @param mockImages
 * @returns
 */
export const restaurantsTransform = <T extends MockApiResult[]>(
   results: T,
   mockImages?: string[]
): RestaurantInfoCardT[] => {
   if (!results) return [];

   const thereAreMockImages = mockImages && mockImages.length > 0;

   const mappedResults = results.map(restaurant => {
      return {
         name: restaurant.name,
         icon: restaurant.icon,
         photo: thereAreMockImages ? getRandomMockImage(mockImages) : "",
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
