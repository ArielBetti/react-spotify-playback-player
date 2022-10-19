import { memo, FC } from "react";

// children: components
import { Controls, Device, Infos, ProgressBar } from "../../";
import { useEventEmitter } from "../../../hooks/useEventEmitter";

// atoms: components
import * as Atom from "./atoms";
import { IPlayerProps } from "./types";

// ::
const Player: FC<IPlayerProps> = ({
  onLinkClick,
  deviceIsReady,
  playback,
  player,
}) => {
  const { useListener } = useEventEmitter();

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

  return (
    <Atom.PlayerContainer>
      <Atom.PlayerBarContainer>
        <Infos playback={playback} />
        <Atom.PlayerSeekBarContainer>
          <Controls playback={playback} player={player} />
          {deviceIsReady === "ready" && (
            <ProgressBar playback={playback} player={player} />
          )}
        </Atom.PlayerSeekBarContainer>
        {deviceIsReady === "ready" && <Device player={player} />}
      </Atom.PlayerBarContainer>
    </Atom.PlayerContainer>
  );
};

export default memo(Player);
