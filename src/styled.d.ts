import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    backgroundColor?: string;
    highLightColor?: string;
    primaryTextColor?: string;
    secondaryBackgroundColor?: string;
    secondaryTextColor?: string;
    disabledColor?: string;
    popOverColor?: string;
    breakpoints: {
      xsm: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transitions: {
      time: string;
      type: string;
    };
    spacing: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
