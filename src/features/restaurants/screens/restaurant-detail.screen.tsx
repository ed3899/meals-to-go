import React from "react";

import type { RestaurantsStackScreenPropsT } from "../../../../@types";

import { SafeArea } from "../../../components/utility/safe-area.component";
import RestaurantInfoCard from "../components/restaurant-info-card.component";



const RestaurantDetailScreen = ({
   route
}: RestaurantsStackScreenPropsT<"RestaurantDetail">) => {
   const { restaurant } = route.params;

   return (
      <SafeArea>
         <RestaurantInfoCard restaurant={restaurant} />
      </SafeArea>
   );
};

export default RestaurantDetailScreen;
