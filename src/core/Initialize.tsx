import { FC, useCallback, useMemo } from "react";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";
import { ThemeProvider } from "styled-components";
import { Player } from "../components";

// theme
import { defaultTheme } from "../theme/default";

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

  const newTheme = useMemo(() => theme, [theme]);

  return useMemo(
    () => (
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
    [token, theme]
  );
};

export default Initialize;
