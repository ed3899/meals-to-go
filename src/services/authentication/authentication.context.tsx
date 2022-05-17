import React, { useState, createContext } from "react";

import type { AuthenticationContextT } from "../../../@types";

import { loginRequest } from "./authentication.service";

const AuthenticationContext = createContext<AuthenticationContextT>({
   user: undefined,
   isLoading: false,
   error: undefined,
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   onLogin: () => {}
});

export const AuthenticationContextProvider: React.FC = ({ children }) => {
   const [isLoading, setIsLoading] =
      useState<AuthenticationContextT["isLoading"]>(false);
   const [user, setUser] = useState<AuthenticationContextT["user"]>();
   const [error, setError] = useState<AuthenticationContextT["error"]>();

   const onLogin: AuthenticationContextT["onLogin"] = (
      email: string,
      password: string
   ) => {
      setIsLoading(true);

      loginRequest(email, password)
         .then(user => {
            setUser(user);
            setIsLoading(false);
         })
         .catch(error => {
            setIsLoading(false);
            setError(error);
         })
         .finally(() => setIsLoading(false));
   };

   return (
      <AuthenticationContext.Provider
         value={{
            user: user,
            onLogin: onLogin,
            isLoading: isLoading,
            error: error
         }}
      >
         {children}
      </AuthenticationContext.Provider>
   );
};

export default AuthenticationContext;
