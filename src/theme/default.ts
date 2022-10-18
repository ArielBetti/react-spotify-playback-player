import { DefaultTheme } from "styled-components";

export const defaultTheme = (): DefaultTheme => ({
  backgroundColor: "#181818",
  highLightColor: "#1ed760",
  primaryTextColor: "#ffffff",
  secondaryBackgroundColor: "#282828",
  secondaryTextColor: "#b3b3b3",
  disabledColor: "#373737",
  breakpoints: {
    xsm: "360px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1350px",
  },
  transitions: {
    time: "0.3s",
    type: "ease",
  },
  spacing: {
    xxxs: "4px",
    xxs: "8px",
    xs: "16px",
    sm: "24px",
    md: "32px",
    lg: "40px",
    xl: "48px",
    xxl: "56px",
    xxxl: "64px",
  },
});
