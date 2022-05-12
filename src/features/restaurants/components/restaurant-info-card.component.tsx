import React from "react";

import { SvgXml } from "react-native-svg";

import open from "../../../../assets/open";
import star from "../../../../assets/star";
import Spacer from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";
import { range, genRandomString } from "../../../utils";
import {
   RestaurantCard,
   RestaurantCardCover,
   Address,
   Info,
   Rating,
   Section,
   SectionEnd,
   Icon
} from "./restaurant-info-card.styles";

type RestaurantInfoPropsT = {
   restaurant_?: Partial<{
      name_: string;
      icon_: string;
      photos_: string[];
      address_: string;
      rating_: number;
      isOpenNow_: boolean;
      isClosedTemporarily_: boolean;
   }>;
};

const RestaurantInfoCard: React.FC<RestaurantInfoPropsT> = ({
   restaurant_ = {}
}) => {
   const {
      name_ = "Some restaurant",
      icon_ = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos_ = [
         "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
      ],
      address_ = "100 some random street",
      isOpenNow_ = true,
      rating_ = 4,
      isClosedTemporarily_ = true
   } = restaurant_;

   const ratingArray = range(0, 3, 1);

   return (
      <RestaurantCard elevation={5}>
         <RestaurantCardCover key={name_} source={{ uri: photos_[0] }} />
         <Info>
            <CustomText variant="label">{name_}</CustomText>
            <Section>
               <Rating>
                  {ratingArray.map(() => (
                     <SvgXml
                        xml={star}
                        width={20}
                        height={20}
                        key={genRandomString(13)}
                     />
                  ))}
               </Rating>

               <SectionEnd>
                  {isClosedTemporarily_ && (
                     <CustomText variant="error">CLOSED TEMPORARILY</CustomText>
                  )}

                  <Spacer position="left" size="large">
                     {isOpenNow_ && (
                        <SvgXml xml={open} width={20} height={20} />
                     )}
                  </Spacer>

                  <Spacer position="left" size="large">
                     <Icon source={{ uri: icon_ }} />
                  </Spacer>
               </SectionEnd>
            </Section>

            <Address>{address_}</Address>
         </Info>
      </RestaurantCard>
   );
};

export default RestaurantInfoCard;
