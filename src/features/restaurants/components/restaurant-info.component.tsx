import React from "react";

import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const styles = StyleSheet.create({
   card: { backgroundColor: "white" },
   cover: { padding: 20, backgroundColor: "white" },
   title: { padding: 16 }
});

type RestaurantInfoPropsT = {
   restaurant_?: Partial<{
      name_: string;
      icon_: unknown;
      photos_: string[];
      address_: string;
      rating_: number;
      isOpenNow_: boolean;
      isClosedTemporarily_: boolean;
   }>;
};

const RestaurantInfo: React.FC<RestaurantInfoPropsT> = ({
   restaurant_ = {}
}) => {
   //! Safeguard undefined
   const {
      name_ = "Some restaurant",
      icon_,
      photos_ = [
         "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
      ],
      address_ = "100 some random street",
      isOpenNow_ = true,
      rating_ = 4,
      isClosedTemporarily_
   } = restaurant_;

   return (
      <Card elevation={5} style={styles.card}>
         <Card.Cover
            key={name_}
            style={styles.cover}
            source={{ uri: photos_[0] }}
         />
         <Text style={styles.title}>{name_}</Text>
      </Card>
   );
};

export default RestaurantInfo;
