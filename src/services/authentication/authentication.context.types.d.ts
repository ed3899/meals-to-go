export type AuthenticationContext<U> = {
   user: U | undefined;
   isLoading: boolean;
   isAuthenticated: boolean;
   error: string | undefined;
   onLogin: (email: string, password: string) => void;
};
