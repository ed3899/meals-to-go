import React, { useContext } from "react";

import { Ionicons } from "@expo/vector-icons";
import {
   createBottomTabNavigator,
   BottomTabNavigationOptions
} from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { Text, Button } from "react-native";

import AuthenticationContext from "../../services/authentication/authentication.context";

import { RootTabParamListT } from "../../../@types";
import { SafeArea } from "../../components/utility/safe-area.component";
import MapScreen from "../../features/map/screens/map.screen";
import RestaurantsNavigator from "./restaurants.navigator";

/**
 * @abstract Returns the icon based on the route and focused prop of the TabBarIcon
 * @internal
 * @default "md-settings"
 * @param routeName_
 * @returns
 */
export const getIcon = (
   routeName_?: keyof RootTabParamListT
): keyof typeof Ionicons.glyphMap => {
   // You can return any component that you like here!
   switch (routeName_) {
      case "Restaurants":
         return "md-restaurant";

      case "Map":
         return "md-map";

      default:
         return "md-settings";
   }
};

/**
  * @abstract Helper for getting the TabNav Screen options
  * @example 
  * <Tab.Navigator
       screenOptions={({ route }) =>
          getBottomTabNavScreenOptions(route)
          }
    >
    @requires TabParamList
  * @param route 
  * @returns 
  */
export function getBottomTabNavScreenOptions(
   route: RouteProp<RootTabParamListT, keyof RootTabParamListT>
): BottomTabNavigationOptions {
   return {
      tabBarIcon: ({ size, color }) => {
         return (
            <Ionicons name={getIcon(route.name)} size={size} color={color} />
         );
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray"
   };
}

const Tab = createBottomTabNavigator<RootTabParamListT>();

const Settings = () => {
   const { onLogout } = useContext(AuthenticationContext);
   return (
      <SafeArea>
         <Text>Settings</Text>
         <Button title="logout" onPress={() => onLogout()} />
      </SafeArea>
   );
};

const AppNavigator = () => (
   <Tab.Navigator
      screenOptions={({ route }) => getBottomTabNavScreenOptions(route)}
   >
      <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={Settings} />
   </Tab.Navigator>
);

export default AppNavigator;
