import type { CompactRestaurantInfo_Component_Props } from "../src/components/restaurant/compact-restaurant-info.component.types";
import type { MapCallout_Component_Props } from "../src/features/map/components/map.callout.component.types";
import type {
   RootTabParamList,
   RootTabScreenProps,
   RestaurantsStackScreenProps
, RootTabCompositeScreenProps } from "../src/infrastructure/navigation/app.navigator.types";
import type { RestaurantsStackParamList } from "../src/infrastructure/navigation/restaurants.navigator.types";
import type { FavouritesContext } from "../src/services/favourites/favourites.context.types";
import type { LocationContext } from "../src/services/location/location.context.types";
import type {
   LocationGeometry,
   LocationResults,
   LocationMock
} from "../src/services/location/location.mock.types";
import type { RestaurantContextHelper } from "../src/services/restaurants/restaurant.context.types";
import type {
   Mock,
   MockApiResult
} from "../src/services/restaurants/restaurant.service.types";


import { locationTransform as LocationTransformFn } from "../src/services/location/location.service";
import { restaurantsTransform as RestaurantsTransformFn } from "../src/services/restaurants/restaurant.service";

//% Restaurant
export type RestaurantInfoCardT = ReturnType<typeof RestaurantsTransformFn>[0];

//% Components
export type MapCallout_Component_PropsT =
   MapCallout_Component_Props<RestaurantInfoCardT>;

export type CompactRestaurantInfo_Component_PropsT =
   CompactRestaurantInfo_Component_Props<RestaurantInfoCardT>;

//% Context
export type RestaurantContextT = RestaurantContextHelper<RestaurantInfoCardT>;

export type LocationContextT = LocationContext<
   ReturnType<typeof LocationTransformFn>
>;

export type FavouritesContextT = FavouritesContext<RestaurantInfoCardT>;

//% Navigation
export type RestaurantStackParamListT =
   RestaurantsStackParamList<RestaurantInfoCardT>;

export {
   //% Restaurant
   Mock,
   MockApiResult,
   //% Location
   LocationGeometry,
   LocationResults,
   LocationMock,
   LocationContextT,
   //% Navigation
   RootTabParamList as RootTabParamListT,
   RootTabCompositeScreenProps as RootTabCompositeScreenPropsT,
   RestaurantStackParamListT,
   RootTabScreenProps as RootTabScreenPropsT,
   RestaurantsStackScreenProps as RestaurantsStackScreenPropsT,
   //% Components
   CompactRestaurantInfo_Component_PropsT
};
