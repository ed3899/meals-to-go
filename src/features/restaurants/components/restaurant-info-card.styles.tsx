import { Card } from "react-native-paper";

import styled from "../../../infrastructure/theme";

export const RestaurantCard = styled(Card)`
   background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
   padding: ${(props) => props.theme.space[3]};
   background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const Address = styled.Text`
   font-family: ${(props_) => props_.theme.fonts.body};
   font-size: ${(props_) => props_.theme.fontSizes.caption};
`;

export const Info = styled.View`
   padding: ${(props_) => props_.theme.space[3]};
`;

export const Rating = styled.View`
   flex-direction: row;
   padding-top: ${(props_) => props_.theme.space[2]};
   padding-bottom: ${(props_) => props_.theme.space[2]};
`;

export const Section = styled.View`
   flex-direction: row;
   align-items: center;
`;

export const SectionEnd = styled.View`
   flex: 1;
   flex-direction: row;
   justify-content: flex-end;
`;

export const Icon = styled.Image`
   width: 15px;
   height: 15px;
`;
