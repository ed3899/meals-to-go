/* eslint-disable react/prop-types */
import React, { useContext } from "react";

import { List } from "react-native-paper";

import type {
   Settings_ScreenT,
   Settings_Stack_Screen_PropsT
} from "../../../../@types";

import { SafeArea } from "../../../components/utility/safe-area.component";
import AuthenticationContext from "../../../services/authentication/authentication.context";

const SettingsScreen: Settings_ScreenT = ({ navigation }) => {
   const { onLogout } = useContext(AuthenticationContext);

   return (
      <SafeArea>
         <List.Section>
            <List.Item
               // eslint-disable-next-line react-native/no-inline-styles
               style={{ padding: 16 }}
               title="Favourites"
               description="View your favourites"
               left={props => (
                  <List.Icon {...props} color="black" icon="heart" />
               )}
               onPress={() => navigation.navigate("Favourites")}
            />

            <List.Item
               // eslint-disable-next-line react-native/no-inline-styles
               style={{ padding: 16 }}
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
