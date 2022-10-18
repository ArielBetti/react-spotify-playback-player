import { ReactNode } from "react";
import "react-spotify-web-playback-sdk";

declare module "react-spotify-web-playback-sdk" {
  export interface WebPlaybackSDKProps {
    initialDeviceName: Spotify.PlayerInit["name"];
    getOAuthToken: Spotify.PlayerInit["getOAuthToken"];
    initialVolume?: Spotify.PlayerInit["volume"];
    connectOnInitialized?: boolean;
    children?: ReactNode;
  }
}
