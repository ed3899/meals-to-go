/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from "react";

import { Animated } from "react-native";

import type { FadeAnimationT as FadeInViewT } from "../../../@types";

const FadeInView: FadeInViewT = ({ duration = 1500, ...props }) => {
   const fadeAnim = useRef(new Animated.Value(0)).current;

   const { style } = props;

   useEffect(() => {
      Animated.timing(fadeAnim, {
         toValue: 1,
         duration: duration,
         useNativeDriver: true
      }).start();
   }, [fadeAnim, duration]);

   return (
      <Animated.View // Special animatable View
         style={{
            ...(style as object),
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            opacity: fadeAnim // Bind opacity to animated value
         }}
      >
         {props.children}
      </Animated.View>
   );
};

export default FadeInView;
