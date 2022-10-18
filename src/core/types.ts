import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export interface IInitializedProps {
  children?: ReactNode;
  deviceName: string;
  theme?: Partial<DefaultTheme>;
  token: string;
  onLinkClick?: (e?: any) => any;
}
