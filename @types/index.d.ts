import type {
   TabParamList,
   BottomTabsScreenHelper
} from "../src/infrastructure/navigation/app.navigator.types";
import type { StackParamList } from "../src/infrastructure/navigation/restaurants.navigator.types";
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
   TabParamList as TabParamListT,
   BottomTabsScreenHelper as BottomTabScreenHelperT,
   StackParamList as StackParamListT
};
