export type FavouritesContext<R> = {
   favourites: R[];
   addToFavourites: (restaurant: R) => void;
   removeFromFavourites: (restaurant: R) => void;
};
