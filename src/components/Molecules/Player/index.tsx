import { memo, FC, useState, useCallback, useEffect } from "react";
import { useTheme } from "styled-components";

// children: components
import { Controls, Device, Infos, ProgressBar } from "../../";
import { useEventEmitter } from "../../../hooks/useEventEmitter";

// types
import type { IPlayerProps } from "./types";

// atoms: components
import * as Atom from "./atoms";

// hooks
import { useWindowDimensions } from "../../../hooks/useWindowDimensions";
import FloatBar from "../FloatBar";
import { useProgressBarPosition } from "../../../hooks/useProgressBarPosition";

// ::
const Player: FC<IPlayerProps> = ({
  onLinkClick,
  deviceIsReady,
  playback,
  player,
}) => {
  const [currentPosition] = useProgressBarPosition({
    hasPaused: playback?.paused,
    duration: playback?.duration,
    position: playback?.position,
  });
  const theme = useTheme();
  const { useListener } = useEventEmitter();
  const { width } = useWindowDimensions();

  // local: states
  const [musicProgress, setMusicProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(50);

  const onChangeMusicProgress = useCallback(
    (position: number) => {
      player?.seek(position);
      setMusicProgress(position);
    },
    [musicProgress]
  );

  // * Progress bar calculation
  let positionRef = Number(
    ((musicProgress / (playback?.duration || 0)) * 100).toFixed(1)
  );

  let percentage = positionRef / 100;

  useEffect(() => {
    setMusicProgress(currentPosition);
  }, [currentPosition]);

  useEffect(() => {
    if (playback?.position) {
      setMusicProgress(playback.position);
    }
  }, []);

  useListener(
    "trackClick",
    (event: CustomEvent) => {
      if (onLinkClick) {
        onLinkClick(event);
      }
    },
    []
  );

  useListener(
    "artistClick",
    (event: CustomEvent) => {
      if (onLinkClick) {
        onLinkClick(event);
      }
    },
    []
  );

  if (width < theme?.breakpoints?.lg?.replace("px", "")) {
    return (
      <FloatBar
        setVolume={setVolume}
        volume={volume}
        currentPosition={currentPosition}
        onChangeMusicProgress={onChangeMusicProgress}
        deviceIsReady={deviceIsReady}
        onLinkClick={onLinkClick}
        percentage={percentage}
        musicProgress={musicProgress}
        setMusicProgress={setMusicProgress}
        player={player}
        playback={playback}
      />
    );
  }

  return (
    <Atom.PlayerContainer>
      <Atom.PlayerBarContainer>
        <Infos playback={playback} />
        <Atom.PlayerSeekBarContainer>
          <Controls playback={playback} player={player} />
          {deviceIsReady === "ready" && (
            <ProgressBar
              onChangeMusicProgress={onChangeMusicProgress}
              currentPosition={currentPosition}
              percentage={percentage}
              musicProgress={musicProgress}
              setMusicProgress={setMusicProgress}
              playback={playback}
              player={player}
            />
          )}
        </Atom.PlayerSeekBarContainer>
        {deviceIsReady === "ready" && (
          <Device setVolume={setVolume} volume={volume} player={player} />
        )}
      </Atom.PlayerBarContainer>
    </Atom.PlayerContainer>
  );
};

export default memo(Player);
