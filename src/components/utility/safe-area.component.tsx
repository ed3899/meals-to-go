import { SafeAreaView } from "react-native-safe-area-context";

import styled from "../../infrastructure/theme";

export const SafeArea = styled(SafeAreaView)`
   flex: 1;
   /*! https://github.com/mobinni/MealsToGo/pull/8/files*/
   background-color: ${props => props.theme.colors.bg.primary};
`;
