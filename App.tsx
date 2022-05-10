//% libs
import React, { Fragment } from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
   return (
      <Fragment>
         <RestaurantsScreen />
         <ExpoStatusBar style="auto" />
      </Fragment>
   );
}
