import React, { createContext, useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

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

   const saveFavourites = async (favourites: RestaurantInfoCardT[]) => {
      try {
         const jsonValue = JSON.stringify(favourites);
         await AsyncStorage.setItem("@favourites", jsonValue);
      } catch (error) {
         console.error(`Error storing ${error}`);
      }
   };

   const loadFavourites = async () => {
      try {
         const value = await AsyncStorage.getItem("@favourites");
         if (value !== null) {
            setFavourites(JSON.parse(value));
         }
      } catch (error) {
         console.error(`Error loading ${error}`);
      }
   };

   useEffect(() => {
      loadFavourites();
   }, []);

   useEffect(() => {
      saveFavourites(favourites);
   }, [favourites]);

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
