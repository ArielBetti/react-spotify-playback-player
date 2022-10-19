import { useCallback, useState, useEffect, FC } from "react";
import { useProgressBarPosition } from "../../../hooks/useProgressBarPosition";

// atoms: components
import * as Atom from "./atoms";
import { IPlayerProgressBar } from "./types";

// ::
const ProgressBar: FC<IPlayerProgressBar> = ({ playback, player }) => {
  const [musicProgress, setMusicProgress] = useState<number>(0);

  const onPlayerResume = useCallback(async () => {
    await player?.resume();
  }, [player]);

  const [currentPosition] = useProgressBarPosition({
    hasPaused: playback?.paused,
    duration: playback?.duration,
    position: playback?.position,
  });

  const onChangeMusicProgress = useCallback(
    (position: number) => {
      player?.seek(position);
      setMusicProgress(position);
    },
    [musicProgress]
  );

  useEffect(() => {
    setMusicProgress(currentPosition);
  }, [currentPosition]);

  // * Progress bar calculation
  let positionRef = Number(
    ((musicProgress / (playback?.duration || 0)) * 100).toFixed(1)
  );

  let percentage = positionRef / 100;

  if (!playback) return null;

  return (
    <Atom.PlayerProgressBar>
      <Atom.PlayerProgressBarSliderContainer>
        <Atom.PlayerProgressBarTimer>
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
        />
        <Atom.PlayerProgressBarTimer>
          {((playback?.duration || 0) / 60000).toFixed(2)}
        </Atom.PlayerProgressBarTimer>
      </Atom.PlayerProgressBarSliderContainer>
    </Atom.PlayerProgressBar>
  );
};

export default ProgressBar;
