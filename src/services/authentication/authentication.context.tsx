import React, { useState, createContext } from "react";

import type { AuthenticationContextT } from "../../../@types";

import { loginRequest } from "./authentication.service";

const AuthenticationContext = createContext<AuthenticationContextT>({
   user: undefined,
   isAuthenticated: false,
   error: undefined,
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   onLogin: () => {}
});

export const AuthenticationContextProvider: React.FC = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] =
      useState<AuthenticationContextT["isAuthenticated"]>(false);
   const [user, setUser] = useState<AuthenticationContextT["user"]>();
   const [error, setError] = useState<AuthenticationContextT["error"]>();

   const onLogin: AuthenticationContextT["onLogin"] = (
      email: string,
      password: string
   ) => {
      setIsAuthenticated(true);

      loginRequest(email, password)
         .then(user => {
            setUser(user);
            setIsAuthenticated(false);
         })
         .catch(error => {
            setIsAuthenticated(false);
            setError(error);
         })
         .finally(() => setIsAuthenticated(false));
   };

   return (
      <AuthenticationContext.Provider
         value={{
            user: user,
            onLogin: onLogin,
            isAuthenticated: isAuthenticated,
            error: error
         }}
      >
         {children}
      </AuthenticationContext.Provider>
   );
};

export default AuthenticationContext;
