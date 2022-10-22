import { ReactNode } from "react";
import { PlaybackState, Player } from "../interfaces";

export interface IInitializedProps {
  children?: ReactNode;
  player?: Player;
  playback?: PlaybackState | undefined;
  deviceIsReady?: "ready" | "not_ready";
  theme?: {
    backgroundColor?: string;
    highLightColor?: string;
    primaryTextColor?: string;
    secondaryBackgroundColor?: string;
    secondaryTextColor?: string;
    disabledColor?: string;
    popOverColor?: string;
  };
  onLinkClick?: (e?: any) => any;
}
