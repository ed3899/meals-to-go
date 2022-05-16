import React, { Fragment } from "react";

import MapView from "react-native-maps";

import styled from "../../../infrastructure/theme";
import Search from "../components/search.component";


const Map = styled(MapView)`
   height: 100%;
   width: 100%;
`;

const MapScreen = () => {
   return (
      <Fragment>
         <Search />
         <Map />
      </Fragment>
   );
};

export default MapScreen;
