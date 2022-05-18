import type { Settings_Stack_ParamListT } from "../../../@types";
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
   Settings: NavigatorScreenParams<Settings_Stack_ParamListT>;
};

export type RootTabScreenProps<T extends keyof RootTabParamList> =
   BottomTabScreenProps<RootTabParamList, T>;

//% Allows the parent to have access to its children
export type RootTabCompositeScreenProps<T extends keyof RootTabParamList> =
   CompositeScreenProps<
      NativeStackScreenProps<
         RestaurantStackParamListT,
         T,
         "Root_Tab_Navigator"
      >,
      RootTabScreenProps<keyof RootTabParamList>
   >;

//% Allows the children to have access to their parent
export type RestaurantsStackScreenProps<
   T extends keyof RestaurantStackParamListT
> = CompositeScreenProps<
   NativeStackScreenProps<
      RestaurantStackParamListT,
      T,
      "Restaurants_Stack_Navigator"
   >,
   RootTabScreenProps<keyof RootTabParamList>
>;

export type Settings_Stack_Screen_Props<
   T extends keyof Settings_Stack_ParamListT
> = CompositeScreenProps<
   NativeStackScreenProps<
      Settings_Stack_ParamListT,
      T,
      "Settings_Stack_Navigator"
   >,
   RootTabScreenProps<keyof RootTabParamList>
>;

declare global {
   namespace ReactNavigation {
      // eslint-disable-next-line @typescript-eslint/no-empty-interface
      interface RootParamList extends RootTabParamList {}
   }
}
