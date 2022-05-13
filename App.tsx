import React, { Fragment } from "react";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
   useFonts as useOswald,
   Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Text } from "react-native";

import type { TabParamList } from "./src/App";

import { SafeArea } from "./src/components/utility/safe-area.component";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider, theme } from "./src/infrastructure/theme";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";
import { getBottomTabNavScreenOptions } from "./src/utils";

const Tab = createBottomTabNavigator<TabParamList>();

const SettingsScreen = () => (
   <SafeArea>
      <Text>Settings</Text>
   </SafeArea>
);
const MapScreen = () => (
   <SafeArea>
      <Text>Maps</Text>
   </SafeArea>
);

export default function App() {
   const [oswaldLoaded] = useOswald({
      Oswald_400Regular
   });

   const [latoLoaded] = useLato({
      Lato_400Regular
   });

   if (!oswaldLoaded || !latoLoaded) return <Fragment></Fragment>;

   return (
      <Fragment>
         <ThemeProvider theme={theme}>
            <LocationContextProvider>
               <RestaurantContextProvider>
                  <NavigationContainer>
                     <Tab.Navigator
                        screenOptions={({ route }) =>
                           getBottomTabNavScreenOptions(route)
                        }
                     >
                        <Tab.Screen
                           name="Restaurants"
                           component={RestaurantsScreen}
                        ></Tab.Screen>
                        <Tab.Screen
                           name="Map"
                           component={MapScreen}
                        ></Tab.Screen>
                        <Tab.Screen
                           name="Settings"
                           component={SettingsScreen}
                        ></Tab.Screen>
                     </Tab.Navigator>
                  </NavigationContainer>
               </RestaurantContextProvider>
            </LocationContextProvider>
         </ThemeProvider>
         <ExpoStatusBar style="auto" />
      </Fragment>
   );
}
