//% libs
import React from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";

import { SafeAreaView } from "react-native-safe-area-context";

import { StyleSheet, Text, View } from "react-native";

import { Fragment } from "react";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
   },
   search: {
      padding: 16,
      backgroundColor: "green"
   },
   list: {
      flex: 1,
      padding: 16,
      backgroundColor: "blue"
   }
});

export default function App() {
   return (
      <Fragment>
         <SafeAreaView style={styles.container}>
            <View style={styles.search}>
               <Text>Search</Text>
            </View>
            <View style={styles.list}>
               <Text>List</Text>
            </View>
         </SafeAreaView>
         <ExpoStatusBar style="auto" />
      </Fragment>
   );
}
