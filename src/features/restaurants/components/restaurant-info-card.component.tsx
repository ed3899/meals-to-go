import React from "react";

import { SvgXml } from "react-native-svg";

import type { TransformedCard } from "../../../../@types";

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
   restaurant?: Partial<TransformedCard>;
};

const RestaurantInfoCard: React.FC<RestaurantInfoPropsT> = ({
   restaurant = {}
}) => {
   const {
      name = "Some restaurant",
      icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
      photos = [
         "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
      ],
      address = "100 some random street",
      isOpenNow = true,
      rating = 4,
      isClosedTemporarily = true
   } = restaurant;

   const ratingArray = range(0, 3, 1);

   const photo_ = photos[0];

   return (
      <RestaurantCard elevation={5}>
         <RestaurantCardCover
            key={name}
            source={{
               uri: "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
            }}
         />
         <Info>
            <CustomText variant="label">{name}</CustomText>
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
                  {isClosedTemporarily && (
                     <CustomText variant="error">CLOSED TEMPORARILY</CustomText>
                  )}

                  <Spacer position="left" size="large">
                     {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
                  </Spacer>

                  <Spacer position="left" size="large">
                     <Icon source={{ uri: icon }} />
                  </Spacer>
               </SectionEnd>
            </Section>

            <Address>{address}</Address>
         </Info>
      </RestaurantCard>
   );
};

export default RestaurantInfoCard;
