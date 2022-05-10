import React from "react";

import { View, Text, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

import RestaurantInfo from "../components/restaurant-info.component";

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

export default function RestaurantsScreen() {
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.search}>
            <Searchbar value="" />
         </View>
         <View style={styles.list}>
            <RestaurantInfo />
         </View>
      </SafeAreaView>
   );
}
