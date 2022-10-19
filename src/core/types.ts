import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export interface IInitializedProps {
  children?: ReactNode;
  deviceName: string;
  theme?: {
    backgroundColor?: string;
    highLightColor?: string;
    primaryTextColor?: string;
    secondaryBackgroundColor?: string;
    secondaryTextColor?: string;
    disabledColor?: string;
  };
  token: string;
  onLinkClick?: (e?: any) => any;
}
