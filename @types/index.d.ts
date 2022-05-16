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
import type {
   RestaurantInfoCard,
   RestaurantContextHelper
} from "../src/services/restaurants/restaurant.context.types";
import type {
   Mock,
   MockApiResult
} from "../src/services/restaurants/restaurant.service.types";

import { locationTransform } from "../src/services/location/location.service";

export type RestaurantContextT = RestaurantContextHelper<RestaurantInfoCard>;

export type RestaurantStackParamListT =
   RestaurantsStackParamList<RestaurantInfoCard>;

export type LocationContextT = LocationContext<
   ReturnType<typeof locationTransform>
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
   RestaurantsStackScreenProps as RestaurantsStackScreenPropsT
};
