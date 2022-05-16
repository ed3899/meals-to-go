import type { MapCallout_Component_Props } from "../src/features/map/components/map.callout.component.types";
import type {
   RootTabParamList,
   RootTabScreenProps,
   RestaurantsStackScreenProps
} from "../src/infrastructure/navigation/app.navigator.types";
import type { RestaurantsStackParamList } from "../src/infrastructure/navigation/restaurants.navigator.types";
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

import { CompactRestaurantInfo_Component_Props } from "../src/components/restaurant/compact-restaurant-info.component.types";
import { locationTransform as LocationTransformFn } from "../src/services/location/location.service";
import { restaurantsTransform as RestaurantsTransformFn } from "../src/services/restaurants/restaurant.service";

type RestaurantInfoCard = ReturnType<typeof RestaurantsTransformFn>[0];

type MapCallout_Component_PropsT =
   MapCallout_Component_Props<RestaurantInfoCard>;

type CompactRestaurantInfo_Component_PropsT =
   CompactRestaurantInfo_Component_Props<RestaurantInfoCard>;

export type RestaurantContextT = RestaurantContextHelper<RestaurantInfoCard>;

export type RestaurantStackParamListT =
   RestaurantsStackParamList<RestaurantInfoCard>;

export type LocationContextT = LocationContext<
   ReturnType<typeof LocationTransformFn>
>;

export {
   RestaurantInfoCard as RestaurantInfoCardT,
   Mock,
   MockApiResult,
   LocationGeometry,
   LocationResults,
   LocationMock,
   LocationContextT,
   RootTabParamList as RootTabParamListT,
   RestaurantStackParamListT,
   RootTabScreenProps as RootTabScreenPropsT,
   RestaurantsStackScreenProps as RestaurantsStackScreenPropsT,
   MapCallout_Component_PropsT,
   CompactRestaurantInfo_Component_PropsT
};
