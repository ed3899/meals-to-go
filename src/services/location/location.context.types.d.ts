export type LocationContext<T> = {
   isLoading: boolean;
   error: { isError: boolean; msg: unknown };
   location: T;
   search: (searchKeyword: string) => void;
   keyword: string;
};
