import React from "react";

import { Ionicons } from "@expo/vector-icons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { getRandomBytes } from "expo-random";

import { TabParamList } from "../App";

/**
 * @abstract Generate a range of number from start to stop, with increase step
 * @param start
 * @param stop
 * @param step
 * @returns An array of numbers
 */
export const range = (start: number, stop: number, step: number) =>
   Array.from(
      { length: (stop - start) / step + 1 },
      (_, i) => start + i * step
   );

/**
 * @abstract Generates a random string
 * @requires getRandomBytes from "expo-random"
 * @param bytes_
 * @returns
 */
export const genRandomString = (bytes_: number) =>
   getRandomBytes(bytes_).join();

/**
 * @abstract Returns the icon based on the route and focused prop of the TabBarIcon
 * @internal
 * @default "md-settings"
 * @param routeName_
 * @returns
 */
export const getIcon = (
   routeName_?: keyof TabParamList
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

export const getBottomTabNavScreenOptions = (
   route: RouteProp<TabParamList, keyof TabParamList>
): BottomTabNavigationOptions => {
   return {
      tabBarIcon: ({ size, color }) => {
         return (
            <Ionicons name={getIcon(route.name)} size={size} color={color} />
         );
      },
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray"
   };
};
