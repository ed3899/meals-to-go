export type AuthenticationContext<U> = {
   user: U | undefined;
   isLoading: boolean;
   isAuthenticated: boolean;
   error: string | undefined;
   onLogin: (email: string, password: string) => void;
   onRegister: (
      email: string,
      password: string,
      repeatedPassword: string
   ) => void;
};
