import { FC, useCallback, useMemo } from "react";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";
import { ThemeProvider } from "styled-components";
import { Player } from "../components";

// theme
import { defaultTheme } from "../theme/default";
import PlayerGlobalStyle from "../theme/globals";

// types
import type { IInitializedProps } from "./types";

// ::
const Initialize: FC<IInitializedProps> = ({
  children,
  deviceName,
  onLinkClick,
  theme,
  token,
}) => {
  const getOAuthToken = useCallback(
    (callback: any) => callback(token?.replace("Bearer", "").trim()),
    [token]
  );

  return useMemo(
    () => (
      <ThemeProvider
        theme={{
          ...defaultTheme(),
          backgroundColor:
            theme?.backgroundColor || defaultTheme().backgroundColor,
          highLightColor:
            theme?.highLightColor || defaultTheme().highLightColor,
          primaryTextColor:
            theme?.primaryTextColor || defaultTheme().primaryTextColor,
          secondaryBackgroundColor:
            theme?.secondaryBackgroundColor ||
            defaultTheme().secondaryBackgroundColor,
          secondaryTextColor:
            theme?.secondaryTextColor || defaultTheme().secondaryTextColor,
          disabledColor: theme?.disabledColor || defaultTheme().disabledColor,
        }}
      >
        <PlayerGlobalStyle />
        <WebPlaybackSDK
          initialDeviceName={deviceName}
          getOAuthToken={getOAuthToken}
          initialVolume={0.5}
          connectOnInitialized={token ? true : false}
        >
          {children}
          <Player onLinkClick={onLinkClick} />
        </WebPlaybackSDK>
      </ThemeProvider>
    ),
    [token]
  );
};

export default Initialize;
