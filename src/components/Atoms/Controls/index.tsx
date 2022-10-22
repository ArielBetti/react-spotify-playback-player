import { FC, useMemo } from "react";
import { useTheme } from "styled-components";

// icons
import {
  MdPlayArrow,
  MdPause,
  MdSkipNext,
  MdSkipPrevious,
} from "react-icons/md";

// types
import type { IPlayerControls } from "./types";

// atoms: components
import * as Atom from "./atoms";

// ::
const Controls: FC<IPlayerControls> = ({ player, playback, floatbar }) => {
  const theme = useTheme();
  const iconSize = floatbar ? 20 : 30;

  // memo: states
  const hasPreviusTracks = useMemo(() => {
    if (playback?.track_window?.previous_tracks?.length) {
      return true;
    }

    return false;
  }, [playback]);

  const hasNextTracks = useMemo(() => {
    if (playback?.track_window?.next_tracks?.length) {
      return true;
    }

    return false;
  }, [playback]);

  if (!player) return null;

  return (
    <Atom.PlayerControlsContainer>
      {hasPreviusTracks ? (
        <Atom.PlayerButton onClick={() => player.previousTrack()}>
          <MdSkipPrevious size={iconSize} color={theme?.highLightColor} />
        </Atom.PlayerButton>
      ) : (
        <Atom.PlayerButton hasDisabled onClick={(e) => e.preventDefault()}>
          <MdSkipPrevious size={iconSize} color={theme?.disabledColor} />
        </Atom.PlayerButton>
      )}
      {!playback?.paused ? (
        <Atom.PlayerButton
          hasDisabled={!playback?.duration}
          onClick={(e) =>
            playback?.duration ? player.pause() : e.preventDefault()
          }
        >
          <MdPause
            size={iconSize}
            color={
              playback?.duration ? theme?.highLightColor : theme?.disabledColor
            }
          />
        </Atom.PlayerButton>
      ) : (
        <Atom.PlayerButton
          hasDisabled={!playback?.duration}
          onClick={(e) =>
            playback?.duration ? player.resume() : e.preventDefault()
          }
        >
          <MdPlayArrow
            size={iconSize}
            color={
              playback?.duration ? theme?.highLightColor : theme?.disabledColor
            }
          />
        </Atom.PlayerButton>
      )}
      {hasNextTracks ? (
        <Atom.PlayerButton onClick={() => player.nextTrack()}>
          <MdSkipNext size={iconSize} color={theme?.highLightColor} />
        </Atom.PlayerButton>
      ) : (
        <Atom.PlayerButton onClick={(e) => e.preventDefault()} hasDisabled>
          <MdSkipNext size={iconSize} color={theme?.disabledColor} />
        </Atom.PlayerButton>
      )}
    </Atom.PlayerControlsContainer>
  );
};

export default Controls;
