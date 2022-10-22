import { FC, useState } from "react";
import Controls from "../../Atoms/Controls";
import Infos from "../../Atoms/Infos";

// types
import type { IFloatBarProps } from "./types";

// components
import * as Atom from "./atoms";
import InfosPopover from "../../Atoms/InfosPopover";
import ProgressBar from "../../Atoms/ProgressBar";
import Device from "../../Atoms/Device";

// ::
const FloatBar: FC<IFloatBarProps> = ({
  currentPosition,
  musicProgress,
  onChangeMusicProgress,
  onLinkClick,
  percentage,
  playback,
  player,
  setVolume,
  volume,
  setMusicProgress,
}) => {
  const [openPopover, setOpenPopover] = useState(false);

  if (!playback) return null;

  return (
    <Atom.FloatBarContainer>
      <Atom.FloatBarContent>
        <Atom.FloatBarRow>
          <Infos playback={playback} floatbar />
          <Atom.FloatBarControls>
            <InfosPopover setOpen={setOpenPopover} open={openPopover}>
              <Infos playback={playback} floatbar />
              <ProgressBar
                currentPosition={currentPosition}
                musicProgress={musicProgress}
                onChangeMusicProgress={onChangeMusicProgress}
                percentage={percentage}
                player={player}
                playback={playback}
                setMusicProgress={setMusicProgress}
                floatbar
              />
              <Device
                player={player}
                setVolume={setVolume}
                volume={volume}
                floatbar
              />
            </InfosPopover>
            <Controls floatbar player={player} playback={playback} />
          </Atom.FloatBarControls>
        </Atom.FloatBarRow>
        <Atom.FloatBarRow>
          <Atom.FloatBarMusicProgress
            progressBarSize={parseFloat(
              percentage?.toFixed(2).replace("0.", "0") || "0"
            )}
          />
        </Atom.FloatBarRow>
      </Atom.FloatBarContent>
    </Atom.FloatBarContainer>
  );
};

export default FloatBar;
