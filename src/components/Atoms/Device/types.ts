import { Dispatch } from "react";
import { Player } from "../../../interfaces";

export interface IDeviceVolumeSlider {
  volumeBar: number;
  floatbar?: boolean;
}

export interface IPlayerDevice {
  player: Player;
  volume: number;
  setVolume: Dispatch<React.SetStateAction<number>>;
  floatbar?: boolean;
}
