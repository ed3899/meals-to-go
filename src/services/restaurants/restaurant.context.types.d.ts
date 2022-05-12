import { TransformedMockApiResult } from "./restaurant.service.types";

export type RestaurantInfoCard<P> = {
   name: string;
   icon: string | undefined;
   photos: P;
   address: string;
   rating: number | undefined;
   isOpenNow: boolean | undefined;
   isClosedTemporarily: boolean;
};

export type RestaurantContext<R> = {
   restaurants: R[];
   isLoading: boolean;
   error: { error: boolean; msg: unknown };
};
