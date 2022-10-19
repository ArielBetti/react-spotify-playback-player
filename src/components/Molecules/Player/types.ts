import {
  PlaybackState,
  Player,
} from "../../../interfaces";

export interface IPlayerProps {
  onLinkClick?: (e?: any) => any;
  player: Player;
  playback?: PlaybackState;
  deviceIsReady?: "ready" | "not_ready";
}
