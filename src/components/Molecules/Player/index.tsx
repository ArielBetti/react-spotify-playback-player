import { memo, FC } from "react";
import {
  usePlaybackState,
  usePlayerDevice,
  useWebPlaybackSDKReady,
} from "react-spotify-web-playback-sdk";

// children: components
import { Controls, Device, Infos, ProgressBar } from "../../";
import { useEventEmitter } from "../../../hooks/useEventEmitter";

// atoms: components
import * as Atom from "./atoms";
import { IPlayerProps } from "./types";

// ::
const Player: FC<IPlayerProps> = ({ onLinkClick }) => {
  const device = usePlayerDevice();
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
        <Infos />
        <Atom.PlayerSeekBarContainer>
          <Controls />
          {device?.status === "ready" && <ProgressBar />}
        </Atom.PlayerSeekBarContainer>
        {device?.status === "ready" && <Device />}
      </Atom.PlayerBarContainer>
    </Atom.PlayerContainer>
  );
};

export default memo(Player);
