//% libs
import React, { Fragment } from "react";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff"
   },
   search: {
      padding: 16,
      backgroundColor: "white"
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
               <Searchbar value="" />
            </View>
            <View style={styles.list}>
               <Text>List</Text>
            </View>
         </SafeAreaView>
         <ExpoStatusBar style="auto" />
      </Fragment>
   );
}
