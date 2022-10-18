import { useTheme } from "styled-components";
import {
  usePlaybackState,
  useSpotifyPlayer,
} from "react-spotify-web-playback-sdk";

// icons
import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

// atoms: components
import * as Atom from "./atoms";
import { useMemo } from "react";

// ::
const Controls = () => {
  const theme = useTheme();

  const playbackState = usePlaybackState();
  const player = useSpotifyPlayer();

  // memo: states
  const hasPreviusTracks = useMemo(() => {
    if (playbackState?.track_window?.previous_tracks?.length) {
      return true;
    }

    return false;
  }, [playbackState]);

  const hasNextTracks = useMemo(() => {
    if (playbackState?.track_window?.next_tracks?.length) {
      return true;
    }

    return false;
  }, [playbackState]);

  if (!player) return null;

  return (
    <Atom.PlayerControlsContainer>
      {hasPreviusTracks ? (
        <Atom.PlayerButton onClick={() => player.previousTrack()}>
          <MdSkipPrevious size="30px" color={theme?.highLightColor} />
        </Atom.PlayerButton>
      ) : (
        <Atom.PlayerButton hasDisabled onClick={(e) => e.preventDefault()}>
          <MdSkipPrevious size="30px" color={theme?.disabledColor} />
        </Atom.PlayerButton>
      )}
      {!playbackState?.paused ? (
        <Atom.PlayerButton
          hasDisabled={!playbackState?.duration}
          onClick={(e) =>
            playbackState?.duration ? player.pause() : e.preventDefault()
          }
        >
          <MdPause
            size="30px"
            color={
              playbackState?.duration
                ? theme?.highLightColor
                : theme?.disabledColor
            }
          />
        </Atom.PlayerButton>
      ) : (
        <Atom.PlayerButton
          hasDisabled={!playbackState?.duration}
          onClick={(e) =>
            playbackState?.duration ? player.resume() : e.preventDefault()
          }
        >
          <MdPlayArrow
            size="30px"
            color={
              playbackState?.duration
                ? theme?.highLightColor
                : theme?.disabledColor
            }
          />
        </Atom.PlayerButton>
      )}
      {hasNextTracks ? (
        <Atom.PlayerButton onClick={() => player.nextTrack()}>
          <MdSkipNext size="30px" color={theme?.highLightColor} />
        </Atom.PlayerButton>
      ) : (
        <Atom.PlayerButton onClick={(e) => e.preventDefault()} hasDisabled>
          <MdSkipNext size="30px" color={theme?.disabledColor} />
        </Atom.PlayerButton>
      )}
    </Atom.PlayerControlsContainer>
  );
};

export default Controls;
