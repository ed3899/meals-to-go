import React from "react";

import { Platform } from "react-native";
import WebView from "react-native-webview";

import { CompactRestaurantInfo_Component_PropsT } from "../../../@types";
import styled from "../../infrastructure/theme";
import { CustomText } from "../typography/text.component";

const CompactImage = styled.Image`
   border-radius: 10px;
   width: 120px;
   height: 100px;
`;

const CompactWebview = styled(WebView)`
   border-radius: 10px;
   width: 120px;
   height: 100px;
`;

const Item = styled.View`
   padding: 10px;
   max-width: 120px;
   align-items: center;
`;

const CompactRestaurantInfo: React.FC<
   CompactRestaurantInfo_Component_PropsT
> = ({ restaurant }) => {
   const isAndroid = Platform.OS === "android";

   console.log({ restaurant });

   return (
      <Item>
         {isAndroid ? (
            <CompactWebview source={{ uri: restaurant.photo }} />
         ) : (
            <CompactImage source={{ uri: restaurant.photo }} />
         )}

         <CustomText center variant="caption" numberOfLines={3}>
            {restaurant.name}
         </CustomText>
      </Item>
   );
};

export default CompactRestaurantInfo;
