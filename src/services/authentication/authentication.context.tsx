import React, { useState, createContext, useEffect } from "react";

import { FirebaseError } from "firebase/app";

import type { AuthenticationContextT } from "../../../@types";

import {
   onAuthStateChangeWrapper,
   loginRequest,
   registrationRequest,
   signOutWrapper
} from "./authentication.service";

const AuthenticationContext = createContext<AuthenticationContextT>({
   user: undefined,
   isAuthenticated: false,
   isLoading: false,
   error: undefined,
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   onLogin: () => {},
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   onRegister: () => {},
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   onLogout: () => {}
});

export const AuthenticationContextProvider: React.FC = ({ children }) => {
   const [isLoading, setIsLoading] =
      useState<AuthenticationContextT["isAuthenticated"]>(false);
   const [user, setUser] = useState<AuthenticationContextT["user"]>();
   const [error, setError] = useState<AuthenticationContextT["error"]>();

   useEffect(() => {
      const authUnsubcribe = onAuthStateChangeWrapper(user => {
         if (user) {
            setUser(user);
         }
      });

      return authUnsubcribe;
   }, []);

   /**
    * @abstract Is False when we don't have a user
    * @returns
    */
   const isAuthenticated = () => !!user;

   /**
    * @abstract Gets called when user logs in
    * @param email
    * @param password
    */
   const onLogin: AuthenticationContextT["onLogin"] = (
      email: string,
      password: string
   ) => {
      setIsLoading(true);

      loginRequest(email, password)
         .then(userCredential => {
            setUser(userCredential.user);
            setIsLoading(false);
         })
         .catch((error: FirebaseError) => {
            setIsLoading(false);
            setError(error.message);
         })
         .finally(() => setIsLoading(false));
   };

   /**
    * @abstract Gets called when a new user signs up
    * @param email
    * @param password
    * @param repeatedPassword
    * @returns
    */
   const onRegister = (
      email: string,
      password: string,
      repeatedPassword: string
   ) => {
      setIsLoading(true);

      if (password !== repeatedPassword) {
         setError("Error: Passwords do not match");
         return;
      }

      registrationRequest(email, password)
         .then(createdUserCredential => {
            setUser(createdUserCredential.user);
            setIsLoading(false);
         })
         .catch((error: FirebaseError) => {
            setIsLoading(false);
            setError(error.message);
         });
   };

   /**
    * @abstract Gets called when the user signs out
    */
   const onLogout = () => {
      signOutWrapper().then(() => {
         setUser(undefined);
         setError(undefined);
      });
   };

   return (
      <AuthenticationContext.Provider
         value={{
            user: user,
            onLogin: onLogin,
            onRegister: onRegister,
            onLogout: onLogout,
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
