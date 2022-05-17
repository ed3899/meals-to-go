import React, { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";

import AuthenticationContext from "../../services/authentication/authentication.context";
import AccountNavigator from "./account.navigator";
import AppNavigator from "./app.navigator";

const Navigation = () => {
   const { isAuthenticated } = useContext(AuthenticationContext);

   console.group("index.tsx_Navigation");
   console.log({ isAuthenticated });
   console.groupEnd();

   return (
      <NavigationContainer>
         {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
      </NavigationContainer>
   );
};

export default Navigation;
