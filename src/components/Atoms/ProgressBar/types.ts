import { Dispatch } from "react";
import { PlaybackState, Player } from "../../../interfaces";

export interface IPlayerProgressBarSlider {
  progressBarSize: number;
  floatbar?: boolean;
}

export interface IPlayerProgressBarTimer {
  floatbar?: boolean;
}

export interface IPlayerProgressBar {
  playback?: PlaybackState;
  player: Player;
  musicProgress: number;
  currentPosition: number;
  percentage: number;
  onChangeMusicProgress: any;
  setMusicProgress: Dispatch<React.SetStateAction<number>>;
  floatbar?: boolean;
}
