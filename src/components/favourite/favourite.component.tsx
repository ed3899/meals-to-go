import React, { useContext } from "react";


import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import styled from "../../infrastructure/theme";
import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
   position: absolute;
   top: 10px;
   right: 10px;
   z-index: 9;
`;

const Favourite = () => {
   const { favourites, addToFavourites, removeFromFavourites } =
      useContext(FavouritesContext);

   return (
      <FavouriteButton>
         <AntDesign name="heart" size={24} color="red" />
      </FavouriteButton>
   );
};

export default Favourite;
