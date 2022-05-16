import React, { createContext, useState } from "react";

import { RestaurantInfoCardT, FavouritesContextT } from "../../../@types";

export const FavouritesContext = createContext<FavouritesContextT>({
   favourites: [],
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   addToFavourites: () => {},
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   removeFromFavourites: () => {}
});

export const FavouritesContextProvider: React.FC = ({ children }) => {
   const [favourites, setFavourites] = useState<RestaurantInfoCardT[]>([]);

   const add = (restaurant: RestaurantInfoCardT) => {
      setFavourites([...favourites, restaurant]);
   };

   const remove = (restaurant: RestaurantInfoCardT) => {
      const newFavourites = favourites.filter(
         x => x.placeId !== restaurant.placeId
      );

      setFavourites(newFavourites);
   };

   return (
      <FavouritesContext.Provider
         value={{
            favourites: favourites,
            addToFavourites: add,
            removeFromFavourites: remove
         }}
      >
         {children}
      </FavouritesContext.Provider>
   );
};
