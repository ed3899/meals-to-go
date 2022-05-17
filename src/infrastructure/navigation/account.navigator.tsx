import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { AccountNavigator_Stack_ParamListT } from "../../../@types";

import AccountScreen from "../../features/account/screens/account.screen";
import LoginScreen from "../../features/account/screens/login.screen";
import RegisterScreen from "../../features/account/screens/register.screen";

const Stack = createNativeStackNavigator<AccountNavigator_Stack_ParamListT>();

const AccountNavigator = () => (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AccountScreen}></Stack.Screen>

      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>

      <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
   </Stack.Navigator>
);

export default AccountNavigator;
