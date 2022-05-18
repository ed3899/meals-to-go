import React, { useRef, useState, useEffect } from "react";

import { Camera, CameraType } from "expo-camera";
import { Button } from "react-native-paper";

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

const CameraScreen = () => {
   const [hasPermission, setHasPermission] = useState(false);
   const cameraRef = useRef<Camera | null>();

   const snap = async () => {
      if (cameraRef && cameraRef.current) {
         const photo = await cameraRef.current.takePictureAsync();
         console.log(photo);
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
