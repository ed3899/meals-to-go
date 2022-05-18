import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import type { Settings_Stack_ParamListT } from "../../../@types";

import SettingsScreen from "../../features/settings/screens/settings.screen";

const SettingsStack = createNativeStackNavigator<Settings_Stack_ParamListT>();

const SettingsNavigator = () => {
   return (
      <SettingsStack.Navigator>
         <SettingsStack.Screen
            options={{
               header: () => null
            }}
            name="Settings_Screen"
            component={SettingsScreen}
         ></SettingsStack.Screen>

         <SettingsStack.Screen
            name="Favourites"
            component={() => null}
         ></SettingsStack.Screen>
      </SettingsStack.Navigator>
   );
};

export default SettingsNavigator;
