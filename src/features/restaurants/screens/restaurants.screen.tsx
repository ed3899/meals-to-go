import React, { Fragment, useContext } from "react";

import { Pressable } from "react-native";
import { ActivityIndicator, Colors } from "react-native-paper";

import type { RestaurantsStackScreenPropsT } from "../../../../@types";

import { RestaurantContextT } from "../../../../@types";
import Spacer from "../../../components/spacer/spacer.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "../../../infrastructure/theme";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import { genRandomString } from "../../../utils";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import Search from "../components/search.component";

const RestaurantList = styled.FlatList.attrs({
   contentContainerStyle: {
      padding: 16
   }
})``;

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

   return (
      <SafeArea>
         {isLoading && (
            <LoadingContainer>
               <Loading size={50} animating color={Colors.blue300} />
            </LoadingContainer>
         )}

         <Search />

         <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
               return (
                  <Fragment>
                     <Pressable
                        onPress={() => navigation.navigate("RestaurantDetail")}
                     >
                        <Spacer position="bottom" size="large">
                           <RestaurantInfoCard
                              restaurant={
                                 item as RestaurantContextT["restaurants"][0]
                              }
                           />
                        </Spacer>
                     </Pressable>
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
