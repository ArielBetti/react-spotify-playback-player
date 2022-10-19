import { FC } from "react";
import { IInitializedProps, Initialize } from "../core";

// hooks
import { EventEmitterContext } from "../hooks/useEventEmitter/context";

// ::
const SpotifyPlaybackPlayer: FC<IInitializedProps> = ({
  children,
  deviceName,
  token,
  theme,
  onLinkClick,
}) => {
  return (
    <EventEmitterContext>
      <Initialize
        deviceName={deviceName}
        token={token}
        theme={theme}
        onLinkClick={onLinkClick}
      >
        {children}
      </Initialize>
    </EventEmitterContext>
  );
};

export default SpotifyPlaybackPlayer;
