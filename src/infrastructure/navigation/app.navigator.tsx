import React from "react";

import { Ionicons } from "@expo/vector-icons";
import {
   createBottomTabNavigator,
   BottomTabNavigationOptions
} from "@react-navigation/bottom-tabs";
import { NavigationContainer, RouteProp } from "@react-navigation/native";
import { Text } from "react-native";

import { TabParamListT } from "../../../@types";
import { SafeArea } from "../../components/utility/safe-area.component";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

/**
 * @abstract Returns the icon based on the route and focused prop of the TabBarIcon
 * @internal
 * @default "md-settings"
 * @param routeName_
 * @returns
 */
export const getIcon = (
   routeName_?: keyof TabParamListT
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
   route: RouteProp<TabParamListT, keyof TabParamListT>
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

const Tab = createBottomTabNavigator<TabParamListT>();

const Settings = () => (
   <SafeArea>
      <Text>Settings</Text>
   </SafeArea>
);
const Map = () => (
   <SafeArea>
      <Text>Map</Text>
   </SafeArea>
);

const AppNavigator = () => (
   <NavigationContainer>
      <Tab.Navigator
         screenOptions={({ route }) => getBottomTabNavScreenOptions(route)}
      >
         <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
         <Tab.Screen name="Map" component={Map} />
         <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
   </NavigationContainer>
);

export default AppNavigator;
