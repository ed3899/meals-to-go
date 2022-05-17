import { variants } from "./text.component";

export type CustomText_Component_Props = Partial<{
   variant: keyof typeof variants;
   center: boolean;
}>;
