export type RestaurantInfoCard<P> = {
   name: string;
   icon: string | undefined;
   photos: P;
   address: string;
   rating: number | undefined;
   isOpenNow: boolean | undefined;
   isClosedTemporarily: boolean;
};

export type RestaurantContextHelper<R> = {
   restaurants: R[];
   isLoading: boolean;
   error: { error: boolean; msg: unknown };
};
