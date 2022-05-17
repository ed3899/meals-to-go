/* eslint-disable react-native/no-raw-text */
import React, { useState, useContext } from "react";

import { ActivityIndicator, Colors } from "react-native-paper";

import AccountBackground, {
   AccountContainer,
   AuthButton,
   AuthInput,
   ErrorContainer,
   Title
} from "../components/account.styles";

import { CustomText } from "../../../components/typography/text.component";

import Spacer from "../../../components/spacer/spacer.component";

import type { RegisterScreen_ComponentT } from "../../../../@types";

import AuthenticationContext from "../../../services/authentication/authentication.context";

// eslint-disable-next-line react/prop-types
const RegisterScreen: RegisterScreen_ComponentT = ({ navigation }) => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [repeatedPassword, setRepeatedPassword] = useState("");

   const { error, onRegister, isLoading } = useContext(AuthenticationContext);

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
               onChangeText={inputEmail => setEmail(inputEmail)}
            />

            <Spacer position="bottom" size="large" />

            <AuthInput
               label="Password"
               value={password}
               textContentType="password"
               secureTextEntry
               autoCapitalize="none"
               onChangeText={inputPassword => setPassword(inputPassword)}
            />

            <Spacer position="bottom" size="large" />

            <AuthInput
               label="Repeat Password"
               value={repeatedPassword}
               textContentType="password"
               secureTextEntry
               autoCapitalize="none"
               onChangeText={inputPassword =>
                  setRepeatedPassword(inputPassword)
               }
            />

            <Spacer position="bottom" size="large" />

            {error && (
               <ErrorContainer>
                  <CustomText variant="error">{error}</CustomText>
               </ErrorContainer>
            )}

            <Spacer position="bottom" size="large" />

            {isLoading ? (
               <ActivityIndicator animating={true} color={Colors.blue300} />
            ) : (
               <AuthButton
                  icon="email"
                  mode="contained"
                  onPress={() => onRegister(email, password, repeatedPassword)}
               >
                  Register
               </AuthButton>
            )}
         </AccountContainer>

         <Spacer position="bottom" size="large" />

         <AuthButton mode="contained" onPress={() => navigation.goBack()}>
            Back
         </AuthButton>
      </AccountBackground>
   );
};

export default RegisterScreen;
