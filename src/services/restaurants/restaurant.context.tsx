import React, { useEffect, createContext, useState, useMemo } from "react";

import { restaurantRequest, restaurantsTransform } from "./restaurant.service";

export const RestaurantContext = createContext<{ restaurants: unknown[] }>({
   restaurants: []
});

/**
 * @abstract Wraps around the application providing a restaurant context
 * @param param0
 * @returns
 */
export const RestaurantContextProvider: React.FC = ({ children }) => {
   return (
      <RestaurantContext.Provider
         value={{
            restaurants: [1, 2, 3]
         }}
      >
         {children}
      </RestaurantContext.Provider>
   );
};
