import React, { Fragment, useState, useEffect } from "react";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
   useFonts as useOswald,
   Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { initializeApp } from "firebase/app";

import Navigation from "./src/infrastructure/navigation";
import { ThemeProvider, theme } from "./src/infrastructure/theme";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { RestaurantContextProvider } from "./src/services/restaurants/restaurant.context";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "",
   authDomain: "mealstogo-1b561.firebaseapp.com",
   projectId: "mealstogo-1b561",
   storageBucket: "mealstogo-1b561.appspot.com",
   messagingSenderId: "726985536994",
   appId: "1:726985536994:web:aae2d52a4cec08470db5bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
   const [isAuthenticated, setIsAuthenticated] = useState(false);

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
