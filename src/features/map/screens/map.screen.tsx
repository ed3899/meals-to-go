import React, { Fragment, useContext, useState, useEffect } from "react";

import MapView from "react-native-maps";

import styled from "../../../infrastructure/theme";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurants/restaurant.context";
import Search from "../components/search.component";

const Map = styled(MapView)`
   height: 100%;
   width: 100%;
`;

const MapScreen = () => {
   const {
      location = {
         lat: -1,
         lng: -1,
         viewport: {
            northeast: {
               lat: -1,
               lng: -1
            },
            southwest: {
               lat: -1,
               lng: -1
            }
         }
      }
   } = useContext(LocationContext);
   const { restaurants = [] } = useContext(RestaurantContext);

   const [latDelta, setLatDelta] = useState(0);

   const { lat, lng, viewport } = location;

   console.log({ location });
   console.log({ latDelta });

   useEffect(() => {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;

      setLatDelta(northeastLat - southwestLat);
   }, [location, viewport]);

   return (
      <Fragment>
         <Search />

         <Map
            region={{
               latitude: lat,
               longitude: lng,
               latitudeDelta: latDelta,
               longitudeDelta: 0.02
            }}
         >
            {restaurants.map(restaurant => {
               return null;
            })}
         </Map>
      </Fragment>
   );
};

export default MapScreen;
