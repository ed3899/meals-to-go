import { Text } from "react-native";
import { DefaultTheme } from "styled-components/native";

import { CustomText_Component_PropsT } from "../../../@types";
import styled from "../../infrastructure/theme";


const defaultTextStyles = (theme: DefaultTheme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme: DefaultTheme) => `
    color: ${theme.colors.text.error};
`;

const caption = (theme: DefaultTheme) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: DefaultTheme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

export const variants = {
   body,
   label,
   caption,
   error,
   hint
};

export const CustomText = styled(Text)<CustomText_Component_PropsT>`
   ${({ theme }) => defaultTextStyles(theme)}
   ${({ variant = "body", theme }) => variants[variant](theme)}
`;
