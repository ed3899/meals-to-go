import React from "react";

import { MapCallout_Component_PropsT } from "../../../../@types";
import styled from "../../../infrastructure/theme";


const MyText = styled.Text``;

const MapCallout: React.FC<MapCallout_Component_PropsT> = ({ restaurant }) => {
   return <MyText>{restaurant.name}</MyText>;
};

export default MapCallout;
