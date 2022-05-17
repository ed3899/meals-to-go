import React, { createContext, useState, useEffect, useContext } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthenticationContext from "../authentication/authentication.context";

import { RestaurantInfoCardT, FavouritesContextT } from "../../../@types";

export const FavouritesContext = createContext<FavouritesContextT>({
   favourites: [],
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   addToFavourites: () => {},
   // eslint-disable-next-line @typescript-eslint/no-empty-function
   removeFromFavourites: () => {}
});

export const FavouritesContextProvider: React.FC = ({ children }) => {
   const { user } = useContext(AuthenticationContext);

   const [favourites, setFavourites] = useState<RestaurantInfoCardT[]>([]);

   const saveFavourites = async (
      favourites: RestaurantInfoCardT[],
      uid: string
   ) => {
      try {
         const jsonValue = JSON.stringify(favourites);
         await AsyncStorage.setItem(`@favourites-${uid}`, jsonValue);
      } catch (error) {
         console.error(`Error storing ${error}`);
      }
   };

   const loadFavourites = async (uid: string) => {
      try {
         const value = await AsyncStorage.getItem(`@favourites-${uid}`);
         if (value !== null) {
            setFavourites(JSON.parse(value));
         }
      } catch (error) {
         console.error(`Error loading ${error}`);
      }
   };

   useEffect(() => {
      if (user && user.uid) {
         loadFavourites(user.uid);
      }
   }, [user]);

   useEffect(() => {
      if (user && user.uid && favourites.length) {
         saveFavourites(favourites, user.uid);
      }
   }, [favourites, user]);

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
