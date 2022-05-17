/* eslint-disable react/prop-types */
import React, { Fragment } from "react";

import Spacer from "../../../components/spacer/spacer.component";

import { ImageBackground, Text } from "react-native";

import type { AccountScreen_ComponentT } from "../../../../@types";

import AccountBackground, {
   AccountContainer,
   AuthButton
} from "../components/account.styles";

const AccountScreen: AccountScreen_ComponentT = ({ navigation }) => {
   return (
      <AccountBackground>
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
                  icon="lock-open-outline"
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
