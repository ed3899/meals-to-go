import React from "react";

import { Button, TextInput } from "react-native-paper";

import styled from "../../../infrastructure/theme";
import { colors } from "../../../infrastructure/theme/colors";

const StyledBackground = styled.ImageBackground<{ children: React.ReactNode }>`
   flex: 1;
   align-items: center;
   justify-content: center;
   height: 100%;
`;

const AccountBackground: React.FC = ({ children }) => {
   return (
      <StyledBackground source={require("../../../../assets/home_bg.jpg")}>
         {children}
      </StyledBackground>
   );
};

export const AccountContainer = styled.View`
   background-color: rgba(255, 255, 255, 0.3);
   padding: ${props => props.theme.space[4]};
   margin-top: ${props => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
   color: colors.brand.primary
})`
   padding: ${props => props.theme.space[2]};
`;

export const AuthInput = styled(TextInput)`
   width: 300px;
`;

export default AccountBackground;
