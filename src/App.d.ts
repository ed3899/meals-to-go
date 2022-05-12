import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import type {
   CompositeScreenProps,
   NavigatorScreenParams
} from "@react-navigation/native";
import type { StackScreenProps } from "@react-navigation/stack";

export type TabParamList = {
   Restaurants: undefined;
   Map: undefined;
   Settings: undefined;
};

export type BottomTabsScreenHelper<T extends keyof TabParamList> =
   BottomTabScreenProps<TabParamList, T>;
