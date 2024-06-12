import { DefaultMantineColor, MantineColorsTuple } from "@mantine/core";

type ExtendedCustomColors =
  | "primaryColorName"
  | "reqship-blue"
  | "reqship-green"
  | "reqship-pink"
  | "reqship-dark"
  | "reqship-light"
  | "reqship-white"
  | "secondaryColorName"
  | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, MantineColorsTuple>;
  }
}

declare module "*.scss";
