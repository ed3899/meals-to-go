import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type {
   CompositeScreenProps,
   NavigatorScreenParams
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RestaurantStackParamListT } from "../../../@types";

export type RootTabParamList = {
   Restaurants: NavigatorScreenParams<RestaurantStackParamListT>;
   Map: undefined;
   Settings: undefined;
};

export type RootTabScreenProps<T extends keyof RootTabParamList> =
   BottomTabScreenProps<RootTabParamList, T>;

export type RootTabCompositeScreenProps<T extends keyof RootTabParamList> =
   CompositeScreenProps<
      NativeStackScreenProps<RestaurantStackParamListT, T>,
      RootTabScreenProps<keyof RootTabParamList>
   >;

export type RestaurantsStackScreenProps<
   T extends keyof RestaurantStackParamListT
> = CompositeScreenProps<
   NativeStackScreenProps<RestaurantStackParamListT, T>,
   RootTabScreenProps<keyof RootTabParamList>
>;
