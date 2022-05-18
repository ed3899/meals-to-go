/* eslint-disable react/prop-types */
import React, { useRef, useState, useEffect, useContext } from "react";

import { Camera, CameraType } from "expo-camera";
import { Button } from "react-native-paper";

import AsyncStorage from "@react-native-async-storage/async-storage";

import AuthenticationContext from "../../../services/authentication/authentication.context";

import { Camera_ScreenT } from "../../../../@types";

import { CustomText } from "../../../components/typography/text.component";
import styled from "../../../infrastructure/theme";

const ProfileCamera = styled(Camera)`
   width: 100%;
   height: 100%;
`;

const CameraContainer = styled.View`
   width: 100%;
   height: 100%;
`;

const CameraButton = styled(Button).attrs({
   mode: "contained",
   icon: "camera"
})`
   position: absolute;
   top: 525px;
   left: 140px;
`;

const CameraScreen: Camera_ScreenT = ({ navigation }) => {
   const [hasPermission, setHasPermission] = useState(false);

   const cameraRef = useRef<Camera | null>();

   const { user } = useContext(AuthenticationContext);

   const snap = async () => {
      if (cameraRef && cameraRef.current && user) {
         const photo = await cameraRef.current.takePictureAsync();
         AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
         navigation.goBack();
      }
   };

   useEffect(() => {
      (async () => {
         const { granted } = await Camera.requestCameraPermissionsAsync();
         setHasPermission(granted);
      })();
   }, []);

   if (hasPermission === false) {
      return <CustomText>No access to camera</CustomText>;
   }

   return (
      <CameraContainer>
         <ProfileCamera
            ref={camera => (cameraRef.current = camera)}
            ratio={"16:9"}
            type={CameraType.front}
            onCameraReady={() => {
               console.log("Camera Ready");
            }}
         ></ProfileCamera>

         <CameraButton onPress={snap}>Snap!</CameraButton>
      </CameraContainer>
   );
};

export default CameraScreen;
