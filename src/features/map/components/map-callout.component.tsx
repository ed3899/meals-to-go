import React from "react";

import { MapCallout_Component_PropsT } from "../../../../@types";
import CompactRestaurantInfo from "../../../components/restaurant/compact-restaurant-info.component";

const MapCallout: React.FC<MapCallout_Component_PropsT> = ({ restaurant }) => {
   return <CompactRestaurantInfo restaurant={restaurant} isMap />;
};

export default MapCallout;
