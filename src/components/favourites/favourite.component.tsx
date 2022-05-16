import React, { useContext } from "react";

import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { Favourite_Component_PropsT } from "../../../@types";
import styled from "../../infrastructure/theme";
import { FavouritesContext } from "../../services/favourites/favourites.context";


const FavouriteButton = styled(TouchableOpacity)`
   position: absolute;
   top: 25px;
   right: 25px;
   z-index: 9;
`;

const Favourite: React.FC<Favourite_Component_PropsT> = ({ restaurant }) => {
   const { favourites, addToFavourites, removeFromFavourites } =
      useContext(FavouritesContext);

   const isFavourite = favourites.find(r => r.placeId === restaurant.placeId);

   return (
      <FavouriteButton
         onPress={() =>
            !isFavourite
               ? addToFavourites(restaurant)
               : removeFromFavourites(restaurant)
         }
      >
         <AntDesign
            name={isFavourite ? "heart" : "hearto"}
            size={24}
            color={isFavourite ? "red" : "white"}
         />
      </FavouriteButton>
   );
};

export default Favourite;
