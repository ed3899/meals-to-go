import React from "react";

import { ScrollView, TouchableOpacity } from "react-native";

import type { FavouritesBar_Component_PropsT } from "../../../@types";

import styled from "../../infrastructure/theme";
import CompactRestaurantInfo from "../restaurant/compact-restaurant-info.component";
import Spacer from "../spacer/spacer.component";
import { CustomText } from "../typography/text.component";

const FavouritesWrapper = styled.View`
   padding: 10px;
`;

const FavouritesBar: React.FC<FavouritesBar_Component_PropsT> = ({
   favouriteRestaurants,
   onNavigate
}) => {
   if (!favouriteRestaurants.length) {
      return null;
   }

   return (
      <FavouritesWrapper>
         <Spacer position="left" size="large">
            <CustomText variant="caption">Favourites</CustomText>
         </Spacer>

         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {favouriteRestaurants.map(restaurant => {
               const key = restaurant.name;
               return (
                  <Spacer key={key} position="left" size="medium">
                     <TouchableOpacity
                        onPress={() =>
                           onNavigate("RestaurantDetail", {
                              restaurant: restaurant
                           })
                        }
                     >
                        <CompactRestaurantInfo
                           restaurant={restaurant}
                           isMap={false}
                        />
                     </TouchableOpacity>
                  </Spacer>
               );
            })}
         </ScrollView>
      </FavouritesWrapper>
   );
};

export default FavouritesBar;
