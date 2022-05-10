import React, { Fragment } from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider, theme } from "./src/infrastructure/theme";

export default function App() {
   return (
      <Fragment>
         <ThemeProvider theme={theme}>
            <RestaurantsScreen />
         </ThemeProvider>
         <ExpoStatusBar style="auto" />
      </Fragment>
   );
}
