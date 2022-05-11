import React, { Fragment } from "react";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
   useFonts as useOswald,
   Oswald_400Regular
} from "@expo-google-fonts/oswald";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Button, Image, Text, View } from "react-native";

import type { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider, theme } from "./src/infrastructure/theme";

type RootStackParamList = {
   Home: undefined;
   Details: { userId: string } | undefined;
};

type DProps = NativeStackScreenProps<RootStackParamList, "Details", "MyStack">;
type HProps = NativeStackScreenProps<RootStackParamList, "Home", "MyStack">;

const RootStack = createNativeStackNavigator<RootStackParamList>();

function DetailsScreen(props: DProps) {
   return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         <Text>Details Screen</Text>
      </View>
   );
}

function HomeScreen({ navigation }: HProps) {
   return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
         <Text>Home Screen</Text>
         <Button
            title="Go to Details"
            onPress={() => navigation.navigate("Details")}
         />
      </View>
   );
}
// require("./assets/adaptive-icon.png")
const LogoTitle: React.FC = function () {
   return (
      <Image
         style={{ width: 50, height: 50 }}
         source={require("./assets/adaptive-icon.png")}
      />
   );
};

function StackScreen() {
   return (
      <RootStack.Navigator initialRouteName="Home">
         <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
               title: "My HOME",
               headerTitle: (props) => <LogoTitle {...props} />,
               headerRight: () => (
                  <Button
                     onPress={() => alert("This is a button!")}
                     title="Info"
                     color="black"
                  />
               )
            }}
         />
         <RootStack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{ userId: "user.id" }}
            options={({ route }) => ({ title: route.params?.userId })}
         />
      </RootStack.Navigator>
   );
}

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
         <NavigationContainer>
            {/* <ThemeProvider theme={theme}>
               <RestaurantsScreen />
            </ThemeProvider>
            <ExpoStatusBar style="auto" /> */}
            <StackScreen />
         </NavigationContainer>
      </Fragment>
   );
}
