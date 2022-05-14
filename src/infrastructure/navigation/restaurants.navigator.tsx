import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantsStackParamListT } from "../../../@types";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

import { Text } from "react-native";

const RestaurantStack =
   createNativeStackNavigator<RestaurantsStackParamListT>();

const RestaurantsNavigator = () => {
   return (
      <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
         <RestaurantStack.Screen
            name="RestaurantsStack"
            component={RestaurantsScreen}
         />
         <RestaurantStack.Screen
            name="RestaurantDetail"
            //! Warning passing an inline function causes performance issues
            component={() => <Text>Restaurant Detail</Text>}
         />
      </RestaurantStack.Navigator>
   );
};

export default RestaurantsNavigator;
