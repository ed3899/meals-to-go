import { Mock } from "../../../@types/services-mock";
import { mocks } from "./mock";

export const restaurantRequest = <T extends keyof Mock>(location_: T) => {
   const mock_ = mocks[location_];

   return new Promise<Mock[T]>((resolve, reject) => {
      if (!mock_) reject("Not found");
      resolve(mock_);
   });
};

restaurantRequest("51.219448,4.402464").then((res) => {
   res.results;
});
