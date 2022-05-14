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

export type RestaurantContextT = RestaurantContextHelper<RestaurantInfoCard>;

export {
   RestaurantInfoCard as RestaurantInfoCardT,
   Mock,
   MockApiResult,
   LocationGeometry,
   LocationResults,
   LocationMock,
   LocationContext as LocationContextT,
   RootTabParamList as RootTabParamListT,
   RestaurantsStackParamList as RestaurantsStackParamListT,
   RootTabScreenProps as RootTabScreenPropsT,
   RestaurantsStackScreenProps as RestaurantsStackScreenPropsT
};
