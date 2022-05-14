import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StackParamListT } from "../../../@types";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createNativeStackNavigator<StackParamListT>();

const RestaurantsNavigator = () => {
   return (
      <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
         <RestaurantStack.Screen
            name="RestaurantsStack"
            component={RestaurantsScreen}
         />
      </RestaurantStack.Navigator>
   );
};

export default RestaurantsNavigator;
