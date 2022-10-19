import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useCallback,
} from "react";
import { SpotifyPlaybackPlayer } from "react-spotify-playback-player";
import { WebPlaybackSDK } from "react-spotify-web-playback-sdk";

export const PlaygroundContext = createContext({});
export const PlaygroundProvider = ({ children }: { children: ReactNode }) => {
  // local: states
  const [player, setPlayer] = useState({});
  const [deviceName, setDeviceName] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const getOAuthToken = useCallback(
    (callback: (arg0: string) => any) =>
      callback(token?.replace("Bearer", "").trim()),
    [token]
  );

  return (
    <PlaygroundContext.Provider
      value={{ token, setToken, deviceName, setDeviceName, player }}
    >
      <WebPlaybackSDK
        initialDeviceName={deviceName}
        getOAuthToken={getOAuthToken}
        initialVolume={0.5}
        // ? ternary is necessary why it is impossible compare undefined values
        connectOnInitialized={token ? true : false}
      >
        {children}
      </WebPlaybackSDK>
    </PlaygroundContext.Provider>
  );
};

export const usePlaygroundContext: any = () => useContext(PlaygroundContext);
