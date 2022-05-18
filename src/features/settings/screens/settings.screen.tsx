/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";

import { TouchableOpacity } from "react-native";
import { List, Avatar } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { useFocusEffect } from "@react-navigation/native";

import type { Settings_ScreenT } from "../../../../@types";

import Spacer from "../../../components/spacer/spacer.component";
import { CustomText } from "../../../components/typography/text.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import styled from "../../../infrastructure/theme";
import AuthenticationContext from "../../../services/authentication/authentication.context";
import { User } from "firebase/auth";

const SettingsItem = styled(List.Item)`
   padding: ${props => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
   align-items: center;
`;

const SettingsScreen: Settings_ScreenT = ({ navigation }) => {
   const { onLogout, user } = useContext(AuthenticationContext);

   const [photo, setPhoto] = useState("");

   /**
    * @abstract Gets the profile picture from the local storage and sets it
    * @description Only if a user and a photo is found
    * @param currentUser
    */
   const getProfilePicture = async (currentUser: User) => {
      const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
      if (photoUri) {
         setPhoto(photoUri);
      }
   };

   /**
    * @abstract Renders either and icon or a picture taken with the camera
    * @param photo
    * @returns
    */
   const conditionalIconOrPhoto = (photo: string) => {
      if (photo === "") {
         return (
            <Avatar.Icon
               size={180}
               icon="human"
               style={{ backgroundColor: "#2182BD" }}
            />
         );
      }
      return <Avatar.Image size={180} source={{ uri: photo }} />;
   };

   useFocusEffect(() => {
      if (user) {
         getProfilePicture(user);
      }
   });

   return (
      <SafeArea>
         <AvatarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
               {conditionalIconOrPhoto(photo)}
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
