import { useCallback, FC } from "react";

// types
import type{ IPlayerProgressBar } from "./types";

// atoms: components
import * as Atom from "./atoms";

// ::
const ProgressBar: FC<IPlayerProgressBar> = ({
  musicProgress,
  onChangeMusicProgress,
  percentage,
  playback,
  player,
  floatbar,
}) => {
  const onPlayerResume = useCallback(async () => {
    await player?.resume();
  }, [player]);

  if (!playback) return null;

  return (
    <Atom.PlayerProgressBar>
      <Atom.PlayerProgressBarSliderContainer>
        <Atom.PlayerProgressBarTimer floatbar={floatbar} >
          {(musicProgress / 60000).toFixed(2)}
        </Atom.PlayerProgressBarTimer>
        <Atom.PlayerProgressBarSlider
          type="range"
          value={musicProgress}
          onClick={() => onPlayerResume()}
          onChange={(e) => onChangeMusicProgress(Number(e.target.value))}
          min={0}
          max={playback?.duration}
          progressBarSize={parseFloat(
            percentage.toFixed(2).replace("0.", "0") || "0"
          )}
          floatbar={floatbar}
        />
        <Atom.PlayerProgressBarTimer floatbar={floatbar} >
          {((playback?.duration || 0) / 60000).toFixed(2)}
        </Atom.PlayerProgressBarTimer>
      </Atom.PlayerProgressBarSliderContainer>
    </Atom.PlayerProgressBar>
  );
};

export default ProgressBar;
