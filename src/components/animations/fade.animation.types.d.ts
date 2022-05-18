import React from "react";

import type { Animated, View } from "react-native";

type FadeAnimationProps = Partial<{ duration: number }> &
   Animated.AnimatedComponent<typeof View>["defaultProps"];

export type FadeAnimation = React.FC<FadeAnimationProps>;
