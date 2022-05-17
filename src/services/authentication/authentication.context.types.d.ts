export type AuthenticationContext<U> = {
   user: U | undefined;
   isLoading: boolean;
   error: unknown;
   onLogin: (email: string, password: string) => void;
};
