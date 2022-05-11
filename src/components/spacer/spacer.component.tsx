import React from "react";

import { DefaultTheme, useTheme } from "styled-components/native";

import styled from "../../infrastructure/theme";

const sizeVariant = {
   small: 1,
   medium: 2,
   large: 3
};

const positionVariant = {
   top: "marginTop",
   left: "marginLeft",
   right: "marginRight",
   bottom: "marginBottom"
};

type SpacerPropsT = {
   position: keyof typeof positionVariant;
   size: keyof typeof sizeVariant;
};

const getVariant = function (
   position_: SpacerPropsT["position"],
   size_: SpacerPropsT["size"],
   theme_: DefaultTheme
) {
   const sizeIndex = sizeVariant[size_];
   const property = positionVariant[position_];
   const value = theme_.space[sizeIndex];

   return `${property}:${value}`;
};

const Spacer: React.FC<SpacerPropsT> = ({ position, size, children }) => {
   const theme = useTheme();
   const variant = getVariant(position, size, theme);
   const ViewVariant = styled.View`
      ${variant}
   `;
   return <ViewVariant>{children}</ViewVariant>;
};

export default Spacer;
