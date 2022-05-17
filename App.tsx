import React, { Fragment } from "react";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
   useFonts as useOswald,
   Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import Navigation from "./src/infrastructure/navigation";
import { ThemeProvider, theme } from "./src/infrastructure/theme";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import firebaseInit from "./src/services/authentication/authentication.service";

// Initialize Firebase
firebaseInit();

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
            <AuthenticationContextProvider>
               <Navigation />
            </AuthenticationContextProvider>
         </ThemeProvider>
         <ExpoStatusBar style="auto" />
      </Fragment>
   );
};

export default App;
