import { PlaybackState, Player } from "../../../interfaces";

export interface IPlayerProgressBarSlider {
  progressBarSize: number;
}

export interface IPlayerProgressBar {
  playback?: PlaybackState;
  player: Player;
}
