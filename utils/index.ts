import { Ionicons } from "@expo/vector-icons";
import { getRandomBytes } from "expo-random";

import { TabParamList } from "../@types/navigation";

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

export /**
 * @abstract Returns the icon based on the route and focused prop of the TabBarIcon
 * @util
 * @default "md-settings"
 * @param routeName_
 * @returns
 */
const getIcon = (
   routeName_?: keyof TabParamList
): keyof typeof Ionicons.glyphMap => {
   switch (routeName_) {
      case "Restaurants":
         return "md-restaurant";

      case "Map":
         return "md-map";

      default:
         return "md-settings";
   }
};
