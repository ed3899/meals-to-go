export type LocationContext = {
   isLoading: boolean;
   error: { isError: boolean; msg: unknown };
   location: {
      lat: number;
      lng: number;
   };

   search: (searchKeyword: string) => void;
   keyword: string;
};
