import styled from "../../../infrastructure/theme";

const AccountBackground = styled.ImageBackground.attrs({
   source: require("../../../../assets/home_bg.jpg")
})`
   flex: 1;
   align-items: center;
   justify-content: center;
`;

export default AccountBackground;
