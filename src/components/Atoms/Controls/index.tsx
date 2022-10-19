import { FC } from "react";
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
import { useMemo } from "react";

// ::
const Controls: FC<IPlayerControls> = ({ player, playback }) => {
  const theme = useTheme();

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
          <MdSkipPrevious size="30px" color={theme?.highLightColor} />
        </Atom.PlayerButton>
      ) : (
        <Atom.PlayerButton hasDisabled onClick={(e) => e.preventDefault()}>
          <MdSkipPrevious size="30px" color={theme?.disabledColor} />
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
            size="30px"
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
            size="30px"
            color={
              playback?.duration ? theme?.highLightColor : theme?.disabledColor
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
