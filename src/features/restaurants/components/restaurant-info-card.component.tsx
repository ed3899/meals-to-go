import React from "react";

import { Text } from "react-native";
import { Card } from "react-native-paper";

import styled from "../../../infrastructure/theme";

const RestaurantCard = styled(Card)`
   background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
   padding: 20px;
   background-color: white;
`;

const Address = styled.Text`
   font-family: ${(props_) => props_.theme.fonts.body};
   font-size: ${(props_) => props_.theme.fontSizes.caption};
`;

const Title = styled(Text)`
   font-family: ${(props_) => props_.theme.fonts.body};
   font-size: ${(props_) => props_.theme.fontSizes.body};
   color: ${(props_) => props_.theme.colors.ui.error};
`;

const Info = styled.View`
   padding: ${(props_) => props_.theme.space[3]};
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
         <Info>
            <Title>{name_}</Title>
            <Address>{address_}</Address>
         </Info>
      </RestaurantCard>
   );
};

export default RestaurantInfoCard;
