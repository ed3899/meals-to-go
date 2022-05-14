import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RestaurantStackParamListT } from "../../../@types";
import RestaurantDetailScreen from "../../features/restaurants/screens/restaurant-detail.screen";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack =
   createNativeStackNavigator<RestaurantStackParamListT>();

const RestaurantsNavigator = () => {
   return (
      <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
         <RestaurantStack.Screen
            name="RestaurantsStack"
            component={RestaurantsScreen}
         />
         <RestaurantStack.Screen
            name="RestaurantDetail"
            component={RestaurantDetailScreen}
         />
      </RestaurantStack.Navigator>
   );
};

export default RestaurantsNavigator;
