import * as styledComponents from "styled-components/native";

import type { DefaultTheme } from "styled-components/native";

import { colors } from "./colors";
import { fonts, fontWeights, fontSizes } from "./fonts";
import { sizes } from "./sizes";
import { space, lineHeights } from "./spacing";

export const theme: DefaultTheme = {
   colors,
   space,
   lineHeights,
   sizes,
   fonts,
   fontSizes,
   fontWeights
};

const {
   default: styled,
   css,
   ThemeProvider
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<DefaultTheme>;

export { css, ThemeProvider };
export default styled;
