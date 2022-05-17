export type AuthenticationContext<U> = {
   user: U | undefined;
   isAuthenticated: boolean;
   error: unknown;
   onLogin: (email: string, password: string) => void;
};
