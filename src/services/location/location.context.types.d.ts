export type LocationContext = {
   isLoading: boolean;
   error: { isError: boolean; msg: unknown };
   location:
      | {
           lat: number;
           lng: number;
        }
      | string
      | undefined;
   search: (searchKeyword: string) => void;
   keyword: string | undefined;
};
