import React from "react";

import Spacer from "../../../components/spacer/spacer.component";

import { Title } from "../components/account.styles";

import type { AccountScreen_ComponentT } from "../../../../@types";

import AccountBackground, {
   AccountContainer,
   AuthButton
} from "../components/account.styles";

const AccountScreen: AccountScreen_ComponentT = ({ navigation }) => {
   return (
      <AccountBackground>
         <Title>Meals To Go</Title>
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
