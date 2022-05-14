import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type {
   CompositeScreenProps,
   NavigatorScreenParams
} from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RestaurantsStackParamListT } from "../../../@types";

export type RootTabParamList = {
   Restaurants: NavigatorScreenParams<RestaurantsStackParamListT>;
   Map: undefined;
   Settings: undefined;
};

export type RootTabScreenProps<T extends keyof RootTabParamList> =
   BottomTabScreenProps<RootTabParamList, T>;

export type RestaurantsStackScreenProps<
   T extends keyof RestaurantsStackParamListT
> = CompositeScreenProps<
   NativeStackScreenProps<RestaurantsStackParamListT, T>,
   RootTabScreenProps<keyof RootTabParamList>
>;
