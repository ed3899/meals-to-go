import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

import { RestaurantsStackParamListT } from "../../../@types";
import RestaurantsScreen from "../../features/restaurants/screens/restaurants.screen";


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
