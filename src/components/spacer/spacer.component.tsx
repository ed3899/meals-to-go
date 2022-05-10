import React from "react";

import styled from "../../infrastructure/theme";

const TopSmall = styled.View`
   margin-top: ${(props_) => props_.theme.space[1]};
`;

const TopMedium = styled.View`
   margin-top: ${(props_) => props_.theme.space[2]};
`;

const TopLarge = styled.View`
   margin-top: ${(props_) => props_.theme.space[3]};
`;

const LeftSmall = styled.View`
   margin-left: ${(props_) => props_.theme.space[1]};
`;

const LeftMedium = styled.View`
   margin-left: ${(props_) => props_.theme.space[2]};
`;

const LeftLarge = styled.View`
   margin-left: ${(props_) => props_.theme.space[3]};
`;

type SpacerPropsT = {
   variant:
      | "top.medium"
      | "top.large"
      | "left.small"
      | "left.medium"
      | "left.large";
};
const Spacer: React.FC<SpacerPropsT> = ({ variant }) => {
   switch (variant) {
      case "top.medium":
         return <TopMedium />;

      case "top.large":
         return <TopLarge />;

      case "left.small":
         return <LeftSmall />;

      case "left.medium":
         return <LeftMedium />;

      case "left.large":
         return <LeftLarge />;

      default:
         return <TopSmall />;
   }
};

export default Spacer;
