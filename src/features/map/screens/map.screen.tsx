import React from "react";

import MapView from "react-native-maps";

import styled from "../../../infrastructure/theme";

const Map = styled(MapView)`
   height: "100%";
   width: "100%";
`;

const MapScreen = () => {
   return (
      <>
         <MapView style={{ height: "100%", width: "100%" }} />
      </>
   );
};

export default MapScreen;
