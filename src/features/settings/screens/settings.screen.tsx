/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";

import type { Settings_ScreenT } from "../../../../@types";

import Spacer from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "../../../infrastructure/theme";
import AuthenticationContext from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
   padding: ${props => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
   align-items: center;
`;

const SettingsScreen: Settings_ScreenT = ({ navigation }) => {
   const { onLogout, user } = useContext(AuthenticationContext);

   return (
      <SafeArea>
         <AvatarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
               <Avatar.Icon
                  size={180}
                  icon="human"
                  style={{ backgroundColor: "#2182BD" }}
               />
            </TouchableOpacity>

            <Spacer position="top" size="large" />

            <CustomText variant="label">
               {(user && user.email) ?? "No user"}
            </CustomText>
         </AvatarContainer>

         <List.Section>
            <SettingsItem
               title="Favourites"
               description="View your favourites"
               left={props => (
                  <List.Icon {...props} color="black" icon="heart" />
               )}
               onPress={() => navigation.navigate("Favourites")}
            />

            <SettingsItem
               title="Logout"
               left={props => (
                  <List.Icon {...props} color="black" icon="door" />
               )}
               onPress={onLogout}
            />
         </List.Section>
      </SafeArea>
   );
};

export default SettingsScreen;
