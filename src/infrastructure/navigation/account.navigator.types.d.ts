import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type AccountNavigator_Stack_ParamList = {
   Main: undefined;
   Login: undefined;
   Register: undefined;
};

export type AccountNavigator_Stack_ScreenProps<
   T extends keyof AccountNavigator_Stack_ParamList
> = NativeStackScreenProps<AccountNavigator_Stack_ParamList, T>;
