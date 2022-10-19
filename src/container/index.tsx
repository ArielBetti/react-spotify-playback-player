import { FC, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { Player } from "../components";
import type { IInitializedProps } from "../core";

// hooks
import { EventEmitterContext } from "../hooks/useEventEmitter/context";
import { defaultTheme } from "../theme/default";

// ::
const SpotifyPlaybackPlayer: FC<IInitializedProps> = ({
  children,
  deviceIsReady,
  playback,
  player,
  onLinkClick,
  theme,
}) => {
  const newTheme = useMemo(() => theme, [theme]);

  return (
    <EventEmitterContext>
      <ThemeProvider
        theme={{
          ...defaultTheme(),
          backgroundColor:
            newTheme?.backgroundColor || defaultTheme().backgroundColor,
          highLightColor:
            newTheme?.highLightColor || defaultTheme().highLightColor,
          primaryTextColor:
            newTheme?.primaryTextColor || defaultTheme().primaryTextColor,
          secondaryBackgroundColor:
            newTheme?.secondaryBackgroundColor ||
            defaultTheme().secondaryBackgroundColor,
          secondaryTextColor:
            newTheme?.secondaryTextColor || defaultTheme().secondaryTextColor,
          disabledColor:
            newTheme?.disabledColor || defaultTheme().disabledColor,
        }}
      >
        {children}
        {player && deviceIsReady && (
          <Player
            deviceIsReady={deviceIsReady}
            playback={playback}
            player={player}
            onLinkClick={onLinkClick}
          />
        )}
      </ThemeProvider>
    </EventEmitterContext>
  );
};

export default SpotifyPlaybackPlayer;
