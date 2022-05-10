import React from "react";

import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
   flex: 1;
   /*! https://github.com/mobinni/MealsToGo/pull/8/files*/
`;

const SearchContainer = styled.View`
   padding: ${(props_) => props_.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
   flex: 1;
   padding: ${(props_) => props_.theme.space[3]};
`;

export default function RestaurantsScreen() {
   return (
      <SafeArea>
         <SearchContainer>
            <Searchbar value="" />
         </SearchContainer>
         <RestaurantListContainer>
            <RestaurantInfoCard />
         </RestaurantListContainer>
      </SafeArea>
   );
}
