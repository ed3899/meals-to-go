import React, { Fragment, useContext } from "react";

import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";

import { RestaurantContextT } from "../../../../@types";
import Spacer from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { genRandomString } from "../../../utils";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SearchContainer = styled.View`
   padding: ${(props_) => props_.theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
   contentContainerStyle: {
      padding: 16
   }
})``;

export default function RestaurantsScreen() {
   const { error, isLoading, restaurants } = useContext(RestaurantContext);

   return (
      <SafeArea>
         <SearchContainer>
            <Searchbar value="" />
         </SearchContainer>
         <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
               return (
                  <Fragment>
                     <Spacer position="bottom" size="large">
                        <RestaurantInfoCard
                           restaurant={
                              item as RestaurantContextT["restaurants"][0]
                           }
                        />
                     </Spacer>
                  </Fragment>
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
