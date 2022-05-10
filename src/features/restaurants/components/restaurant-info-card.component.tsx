import React from "react";

import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components";

const RestaurantCard = styled(Card)`
   background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
   padding: 20px;
   background-color: white;
`;

const Title = styled(Text)`
   padding: 16px;
   color: red;
`;

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

const RestaurantInfoCard: React.FC<RestaurantInfoPropsT> = ({
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
      <RestaurantCard elevation={5}>
         <RestaurantCardCover key={name_} source={{ uri: photos_[0] }} />
         <Title>{name_}</Title>
      </RestaurantCard>
   );
};

export default RestaurantInfoCard;
