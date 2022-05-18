import React, { useRef, useState, useEffect } from "react";

import { Camera, CameraType } from "expo-camera";
import { View } from "react-native";

import { CustomText } from "../../../components/typography/text.component";
import styled from "../../../infrastructure/theme";

const ProfileCamera = styled(Camera)`
   width: 100%;
   height: 100%;
`;

const CameraScreen = () => {
   const [hasPermission, setHasPermission] = useState(false);
   const cameraRef = useRef<Camera | null>();

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
      <ProfileCamera
         ref={camera => (cameraRef.current = camera)}
         type={CameraType.front}
      ></ProfileCamera>
   );
};

export default CameraScreen;
