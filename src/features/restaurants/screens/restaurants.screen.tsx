import React, { Fragment } from "react";

import { Searchbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

import { genRandomString } from "../../../../utils";
import Spacer from "../../../components/spacer/spacer.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
   flex: 1;
   /*! https://github.com/mobinni/MealsToGo/pull/8/files*/
`;

const SearchContainer = styled.View`
   padding: ${(props_) => props_.theme.space[3]};
`;

const RestaurantList = styled.FlatList.attrs({
   contentContainerStyle: {
      padding: 16
   }
})``;

export default function RestaurantsScreen() {
   return (
      <SafeArea>
         <SearchContainer>
            <Searchbar value="" />
         </SearchContainer>
         <RestaurantList
            data={[
               { name: "1" },
               { name: "2" },
               { name: "3" },
               { name: "4" },
               { name: "5" }
            ]}
            renderItem={() => {
               return (
                  <Fragment>
                     <Spacer position="bottom" size="large">
                        <RestaurantInfoCard />
                     </Spacer>
                  </Fragment>
               );
            }}
            keyExtractor={(item) => item.name}
            key={genRandomString(13)}
            // eslint-disable-next-line react-native/no-inline-styles
            contentContainerStyle={{ padding: 16 }}
         />
      </SafeArea>
   );
}
