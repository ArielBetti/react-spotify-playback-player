import { ButtonHTMLAttributes } from "react";
import { PlaybackState, Player } from "../../../interfaces";

export interface IPlayerButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasDisabled?: boolean;
}

export interface IPlayerControls {
  player: Player;
  playback?: PlaybackState;
}
