import React, { Fragment } from "react";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
   useFonts as useOswald,
   Oswald_400Regular
} from "@expo-google-fonts/oswald";
import {
   createBottomTabNavigator,
   BottomTabScreenProps
} from "@react-navigation/bottom-tabs";
import {
   NavigationContainer,
   NavigatorScreenParams,
   CompositeScreenProps
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { Button, Image, Text, View } from "react-native";

import type { RouteProp } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider, theme } from "./src/infrastructure/theme";

type TabsParamList = {
   Feed: { feedParam: string } | undefined;
   Messages: undefined;
};

type RootStackParamList = {
   Home: NavigatorScreenParams<TabsParamList>;
   Profile: undefined;
   Settings: { userId: string } | undefined;
};

type DProps = NativeStackScreenProps<RootStackParamList, "Settings", "MyStack">;
type HomeProps = NativeStackScreenProps<RootStackParamList, "Home", "MyStack">;
const RootStack = createNativeStackNavigator<RootStackParamList>();

type FeedProps = BottomTabScreenProps<TabsParamList, "Feed", "MyTab">;

type FeedScreenNavigationProps = CompositeScreenProps<
   BottomTabScreenProps<TabsParamList, "Feed">,
   NativeStackScreenProps<RootStackParamList>
>;
type MessagesProps = BottomTabScreenProps<TabsParamList, "Messages", "MyTab">;
const Tab = createBottomTabNavigator<TabsParamList>();

function Feed({ navigation }: FeedScreenNavigationProps) {
   return (
      <>
         <Text>Feed!</Text>
         <Button
            title="Button"
            onPress={() => navigation.navigate("Messages")}
         ></Button>
      </>
   );
}

function Messages({ navigation }: MessagesProps) {
   return (
      <>
         <Text>Messages!</Text>
         <Button
            title="Button"
            onPress={() => navigation.navigate("Feed")}
         ></Button>
      </>
   );
}

function Home({ navigation }: HomeProps) {
   return (
      <>
         <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed} />
            <Tab.Screen name="Messages" component={Messages} />
         </Tab.Navigator>
         <Button
            title="Button"
            onPress={() =>
               navigation.navigate("Home", {
                  screen: "Feed",
                  params: {
                     feedParam: "d"
                  }
               })
            }
         ></Button>
      </>
   );
}

function Profile() {
   return <Text>Profile!</Text>;
}

function Settings() {
   return <Text>Settings!</Text>;
}

function Stacks() {
   return (
      <RootStack.Navigator>
         <RootStack.Screen name="Home" component={Home}></RootStack.Screen>
         <RootStack.Screen
            name="Profile"
            component={Profile}
         ></RootStack.Screen>
         <RootStack.Screen
            name="Settings"
            component={Settings}
         ></RootStack.Screen>
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
            <Stacks />
         </NavigationContainer>
      </Fragment>
   );
}
