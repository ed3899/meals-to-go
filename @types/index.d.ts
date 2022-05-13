import type {
   RestaurantInfoCard,
   RestaurantContextHelper
} from "../src/services/restaurants/restaurant.context.types";
import type {
   Mock,
   MockApiResult
} from "../src/services/restaurants/restaurant.service.types";

export type TransformedCard = RestaurantContextHelper<
   RestaurantInfoCard<MockApiResult["photos"]>
>["restaurants"][0];

export type RestaurantContextT = RestaurantContextHelper<TransformedCard>

export { RestaurantInfoCard, Mock, MockApiResult };
