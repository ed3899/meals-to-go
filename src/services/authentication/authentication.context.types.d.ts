export type AuthenticationContext<U, T> = {
   user: U | T | undefined;
   isLoading: boolean;
   isAuthenticated: boolean;
   error: string | undefined;
   onLogin: (email: string, password: string) => void;
   onRegister: (
      email: string,
      password: string,
      repeatedPassword: string
   ) => void;
   onLogout: () => void;
};
