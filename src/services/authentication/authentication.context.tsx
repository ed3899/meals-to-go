import { FirebaseError } from "firebase/app";
import React, { useState, createContext } from "react";

import type { AuthenticationContextT } from "../../../@types";

import { loginRequest } from "./authentication.service";

const AuthenticationContext = createContext<AuthenticationContextT>({
   user: undefined,
   isAuthenticated: false,
   isLoading: false,
   error: undefined,
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   onLogin: () => {}
});

export const AuthenticationContextProvider: React.FC = ({ children }) => {
   const [isLoading, setIsLoading] =
      useState<AuthenticationContextT["isAuthenticated"]>(false);
   const [user, setUser] = useState<AuthenticationContextT["user"]>();
   const [error, setError] = useState<AuthenticationContextT["error"]>();

   /**
    * @abstract False when we don't have a user
    * @returns
    */
   const isAuthenticated = () => !!user;

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
         .catch((error: FirebaseError) => {
            setIsLoading(false);
            setError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   return (
      <AuthenticationContext.Provider
         value={{
            user: user,
            onLogin: onLogin,
            isLoading: isLoading,
            isAuthenticated: isAuthenticated(),
            error: error
         }}
      >
         {children}
      </AuthenticationContext.Provider>
   );
};

export default AuthenticationContext;
