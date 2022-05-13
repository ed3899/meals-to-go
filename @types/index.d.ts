import type {
   RestaurantInfoCard,
   RestaurantContextHelper
} from "../src/services/restaurants/restaurant.context.types";
import type {
   Mock,
   MockApiResult
} from "../src/services/restaurants/restaurant.service.types";

export type RestaurantContextT = RestaurantContextHelper<RestaurantInfoCard>;

export { RestaurantInfoCard as RestaurantInfoCardT, Mock, MockApiResult };
