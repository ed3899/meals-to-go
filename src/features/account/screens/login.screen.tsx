import React, { useState, useContext } from "react";

import { ActivityIndicator, Colors } from "react-native-paper";

import AccountBackground, {
   AccountContainer,
   AuthButton,
   AuthInput
} from "../components/account.styles";

import { ErrorContainer, Title } from "../components/account.styles";

import { CustomText } from "../../../components/typography/text.component";

import Spacer from "../../../components/spacer/spacer.component";

import { LoginScreen_ComponentT } from "../../../../@types";

import AuthenticationContext from "../../../services/authentication/authentication.context";

const LoginScreen: LoginScreen_ComponentT = ({ navigation }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   const { onLogin, error, isLoading } = useContext(AuthenticationContext);

   return (
      <AccountBackground>
         <Title>Meals To Go</Title>
         <AccountContainer>
            <AuthInput
               label="E-mail"
               value={email}
               textContentType="emailAddress"
               keyboardType="email-address"
               autoCapitalize="none"
               onChangeText={emailFromInput => setEmail(emailFromInput)}
            />

            <Spacer size="large" position="bottom" />

            <AuthInput
               label="Password"
               value={password}
               textContentType="password"
               autoCapitalize="none"
               secureTextEntry
               onChangeText={passwordFromInput =>
                  setPassword(passwordFromInput)
               }
            />
            <Spacer size="large" position="bottom" />

            {error && (
               <ErrorContainer>
                  <CustomText variant="error">{error}</CustomText>
               </ErrorContainer>
            )}

            <Spacer size="large" position="top" />
            {isLoading ? (
               <ActivityIndicator animating={true} color={Colors.blue300} />
            ) : (
               <AuthButton
                  icon="lock-open-outline"
                  mode="contained"
                  onPress={() => onLogin(email, password)}
               >
                  Login
               </AuthButton>
            )}
         </AccountContainer>

         <Spacer position="top" size="large" />

         <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
         </AuthButton>
      </AccountBackground>
   );
};

export default LoginScreen;
