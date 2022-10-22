import { Dispatch } from "react";

import type { IPlayerProps } from "../Player/types";

export interface IFloatBarProps extends IPlayerProps {
  musicProgress: number;
  setMusicProgress: Dispatch<React.SetStateAction<number>>;
  percentage: number;
  currentPosition: number;
  onChangeMusicProgress: any;
  volume: number;
  setVolume: Dispatch<React.SetStateAction<number>>;
}
