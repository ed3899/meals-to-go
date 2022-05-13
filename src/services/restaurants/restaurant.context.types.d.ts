export type RestaurantInfoCard = {
   name: string;
   icon: string | undefined;
   photo: string ;
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
