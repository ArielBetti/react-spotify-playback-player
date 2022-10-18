import { useCallback, useState, useEffect } from "react";
import {
  usePlaybackState,
  useSpotifyPlayer,
} from "react-spotify-web-playback-sdk";
import { useProgressBarPosition } from "../../../hooks/useProgressBarPosition";

// atoms: components
import * as Atom from "./atoms";

// ::
const ProgressBar = () => {
  const [musicProgress, setMusicProgress] = useState<number>(0);
  const playbackState = usePlaybackState();
  const player = useSpotifyPlayer();

  const onPlayerResume = useCallback(async () => {
    await player?.resume();
  }, [player]);

  const [currentPosition] = useProgressBarPosition({
    hasPaused: playbackState?.paused,
    duration: playbackState?.duration,
    position: playbackState?.position,
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
    ((musicProgress / (playbackState?.duration || 0)) * 100).toFixed(1)
  );

  let percentage = positionRef / 100;

  if (!playbackState) return null;

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
          max={playbackState?.duration}
          progressBarSize={parseFloat(
            percentage.toFixed(2).replace("0.", "0") || "0"
          )}
        />
        <Atom.PlayerProgressBarTimer>
          {((playbackState?.duration || 0) / 60000).toFixed(2)}
        </Atom.PlayerProgressBarTimer>
      </Atom.PlayerProgressBarSliderContainer>
    </Atom.PlayerProgressBar>
  );
};

export default ProgressBar;
