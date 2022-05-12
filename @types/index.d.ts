import type { RestaurantInfoCard } from "../src/services/restaurants/restaurant.context.types";
import type { RestaurantContext } from "../src/services/restaurants/restaurant.context.types";
import type {
   Mock,
   MockApiResult
} from "../src/services/restaurants/restaurant.service.types";

export type TransformedCard = RestaurantContext<
   RestaurantInfoCard<MockApiResult["photos"]>
>["restaurants"][0];

export { RestaurantInfoCard, Mock, MockApiResult };
