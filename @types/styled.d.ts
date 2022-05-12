// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
   export interface DefaultTheme {
      colors: {
         brand: {
            primary: string;
            secondary: string;
            muted: string;
         };
         ui: {
            primary: string;
            secondary: string;
            tertiary: string;
            quaternary: string;
            disabled: string;
            error: string;
            success: string;
         };
         bg: {
            primary: string;
            secondary: string;
         };
         text: {
            primary: string;
            secondary: string;
            disabled: string;
            inverse: string;
            error: string;
            success: string;
         };
      };
      space: string[];
      lineHeights: {
         title: string;
         copy: string;
      };
      sizes: string[];
      fonts: {
         body: string;
         heading: string;
         monospace: string;
      };
      fontSizes: {
         caption: string;
         button: string;
         body: string;
         title: string;
         h5: string;
         h4: string;
         h3: string;
         h2: string;
         h1: string;
      };
      fontWeights: {
         regular: number;
         medium: number;
         bold: number;
      };
   }
}
