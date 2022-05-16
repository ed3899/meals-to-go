import React, { useContext, useState, useEffect } from "react";

import { Searchbar } from "react-native-paper";

import styled from "../../../infrastructure/theme";
import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
   padding: ${props => props.theme.space[3]};
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
