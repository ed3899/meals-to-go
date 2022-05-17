import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import type { AccountNavigator_Stack_ParamListT } from "../../../@types";

const Stack = createNativeStackNavigator<AccountNavigator_Stack_ParamListT>();

const AccountNavigator = () => (
   <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
         name="Main"
         component={() => (
            <View>
               <Text>Account Screen</Text>
            </View>
         )}
      ></Stack.Screen>

      <Stack.Screen
         name="Login"
         component={() => (
            <View>
               <Text>Login Screen</Text>
            </View>
         )}
      ></Stack.Screen>
   </Stack.Navigator>
);

export default AccountNavigator;
