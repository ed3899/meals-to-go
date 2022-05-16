import React, { Fragment } from "react";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
   useFonts as useOswald,
   Oswald_400Regular
} from "@expo-google-fonts/oswald";
import Constants from "expo-constants";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { initializeApp, FirebaseOptions } from "firebase/app";

import Navigation from "./src/infrastructure/navigation";
import { ThemeProvider, theme } from "./src/infrastructure/theme";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";

const firebaseConfig: FirebaseOptions = {
   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
   apiKey: Constants.manifest?.extra!.FIREBASE_API_KEY,
   authDomain: "mealstogo-1b561.firebaseapp.com",
   projectId: "mealstogo-1b561",
   storageBucket: "mealstogo-1b561.appspot.com",
   messagingSenderId: "726985536994",
   appId: "1:726985536994:web:aae2d52a4cec08470db5bb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
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
            <FavouritesContextProvider>
               <LocationContextProvider>
                  <RestaurantContextProvider>
                     <Navigation />
                  </RestaurantContextProvider>
               </LocationContextProvider>
            </FavouritesContextProvider>
         </ThemeProvider>
         <ExpoStatusBar style="auto" />
      </Fragment>
   );
};

export default App;
