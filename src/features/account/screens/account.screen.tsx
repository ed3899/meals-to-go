import React from "react";

import LottieView from "lottie-react-native";

import Spacer from "../../../components/spacer/spacer.component";

import styled from "../../../infrastructure/theme";

import type { AccountScreen_ComponentT } from "../../../../@types";

import AccountBackground, {
   AccountContainer,
   AuthButton,
   StyledLottieView
} from "../components/account.styles";

const AccountScreen: AccountScreen_ComponentT = ({ navigation }) => {
   return (
      <AccountBackground>
         <StyledLottieView />

         <AccountContainer>
            <AuthButton
               icon="lock-open-outline"
               mode="contained"
               onPress={() => navigation.navigate("Login")}
            >
               Login
            </AuthButton>

            <Spacer size="large" position="top">
               <AuthButton
                  icon="email"
                  mode="contained"
                  onPress={() => navigation.navigate("Register")}
               >
                  Register
               </AuthButton>
            </Spacer>
         </AccountContainer>
      </AccountBackground>
   );
};

export default AccountScreen;
