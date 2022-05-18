/* eslint-disable react-native/no-raw-text */
/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import { TouchableOpacity } from "react-native";

import type {
   Favourites_ScreenT,
   RestaurantInfoCardT
} from "../../../../@types";

import Spacer from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "../../../infrastructure/theme";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import RestaurantInfoCard from "../../restaurants/components/restaurant-info-card.component";
import RestaurantList from "../../restaurants/components/restaurant-list.styles";

const NoFavouritesArea = styled(SafeArea)`
   align-items: center;
   justify-content: center;
`;

const FavouritesScreen: Favourites_ScreenT = ({ navigation }) => {
   const { favourites } = useContext(FavouritesContext);

   if (!favourites.length) {
      return (
         <NoFavouritesArea>
            <CustomText center>No favourites yet</CustomText>
         </NoFavouritesArea>
      );
   }

   return (
      <SafeArea>
         <RestaurantList
            data={favourites}
            renderItem={({ item }) => {
               const item_ = item as RestaurantInfoCardT;
               return (
                  <TouchableOpacity
                     onPress={() =>
                        navigation.navigate("RestaurantDetail", {
                           restaurant: item_
                        })
                     }
                  >
                     <Spacer position="bottom" size="large">
                        <RestaurantInfoCard restaurant={item_} />
                     </Spacer>
                  </TouchableOpacity>
               );
            }}
            keyExtractor={item => (item as RestaurantInfoCardT).name}
         />
      </SafeArea>
   );
};

export default FavouritesScreen;
