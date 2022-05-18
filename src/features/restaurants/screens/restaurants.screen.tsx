import React, { useContext, useState } from "react";

import { TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import type {
   RestaurantsStackScreenPropsT,
   RestaurantInfoCardT
} from "../../../../@types";

import { RestaurantContextT } from "../../../../@types";
import FavouritesBar from "../../../components/favourites/favourites-bar.component";
import Spacer from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "../../../infrastructure/theme";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { genRandomString } from "../../../utils";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import RestaurantList from "../components/restaurant-list.styles";
import Search from "../components/search.component";

const Loading = styled(ActivityIndicator)`
   margin-left: -25px;
`;

const LoadingContainer = styled.View`
   position: absolute;
   top: 50%;
   left: 50%;
`;

export default function RestaurantsScreen({
   navigation
}: RestaurantsStackScreenPropsT<"RestaurantsStack">) {
   const { isLoading, restaurants } = useContext(RestaurantContext);
   const { favourites } = useContext(FavouritesContext);
   const [isToggled, setIsToggled] = useState(false);

   return (
      <SafeArea>
         {isLoading && (
            <LoadingContainer>
               <Loading size={50} animating color={Colors.blue300} />
            </LoadingContainer>
         )}

         <Search
            isFavouritesToggled={isToggled}
            onFavouritesToggled={() => setIsToggled(!isToggled)}
         />

         {isToggled && (
            <FavouritesBar
               favouriteRestaurants={favourites}
               onNavigate={navigation.navigate}
            />
         )}

         <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
               //! Type item as RestaurantInfoCard
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
                        <RestaurantInfoCard
                           restaurant={
                              item as RestaurantContextT["restaurants"][0]
                           }
                        />
                     </Spacer>
                  </TouchableOpacity>
               );
            }}
            keyExtractor={(item: unknown) =>
               (item as RestaurantContextT["restaurants"][0]).name
            } //! Fix with data type
            key={genRandomString(13)}
         />
      </SafeArea>
   );
}
