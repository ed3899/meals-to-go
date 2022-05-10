import React from "react";

import { Text } from "react-native";

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

   return <Text>{name_}</Text>;
};

export default RestaurantInfo;
