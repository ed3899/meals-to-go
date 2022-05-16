import React, { useContext, useEffect, useState } from "react";

import { Searchbar } from "react-native-paper";

import styled from "../../../infrastructure/theme";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
   padding: ${props => props.theme.space[3]};
   position: absolute;
   z-index: 999;
   top: 20px;
   width: 100%;
`;

const Search = () => {
   const { keyword, search } = useContext(LocationContext);
   const [searchKeyword, setSearchKeyword] = useState(keyword);

   useEffect(() => {
      setSearchKeyword(keyword);
   }, [keyword]);

   return (
      <SearchContainer>
         {
            <Searchbar
               value={searchKeyword}
               icon="map"
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
