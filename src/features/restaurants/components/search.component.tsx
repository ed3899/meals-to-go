import React, { useContext, useState, useEffect } from "react";

import { Searchbar } from "react-native-paper";

import styled from "../../../infrastructure/theme";
import { LocationContext } from "../../../services/location/location.context";

import type { RestaurantSearch_Component_PropsT } from "../../../../@types";

const SearchContainer = styled.View`
   padding: ${props => props.theme.space[3]};
`;

const Search: React.FC<RestaurantSearch_Component_PropsT> = ({
   isFavouritesToggled,
   onFavouritesToggled
}) => {
   const { keyword, search } = useContext(LocationContext);
   const [searchKeyword, setSearchKeyword] = useState(keyword);

   useEffect(() => {
      setSearchKeyword(keyword);
   }, [keyword]);

   return (
      <SearchContainer>
         {
            <Searchbar
               icon={isFavouritesToggled ? "heart" : "heart-outline"}
               onIconPress={onFavouritesToggled}
               value={searchKeyword}
               placeholder="Search for a location"
               onSubmitEditing={() => {
                  search(searchKeyword);
               }}
               onChangeText={text => {
                  setSearchKeyword(text);
               }}
            />
         }
      </SearchContainer>
   );
};

export default Search;
