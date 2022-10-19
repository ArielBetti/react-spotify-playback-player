import { useState } from "react";

// components
import * as Atom from "./atoms";
import Status from "../Status";
import Button from "../Button";
import Input from "../Input";
import { usePlaygroundContext } from "../../context";
import TrackDemo from "../TrackDemo";
import {
  useSpotifyPlayer,
  usePlayerDevice,
  usePlaybackState,
} from "react-spotify-web-playback-sdk";
import { SpotifyPlaybackPlayer } from "react-spotify-playback-player";

// ::
const Form = () => {
  const player = useSpotifyPlayer();
  const device = usePlayerDevice();
  const playback = usePlaybackState();

  const [newToken, setNewToken] = useState("");
  const [newDeviceName, setNewDeviceName] = useState("");
  const [linkTarget, setLinkTarget] = useState<string>("");

  const { token, setToken, setDeviceName } = usePlaygroundContext();

  const onChangeParams = () => {
    setToken(newToken);
    setDeviceName(newDeviceName);
  };

  const onLinkClick = (event: { link?: string }) => {
    if (event?.link) {
      return setLinkTarget(event.link);
    }
  };

  return (
    <>
      {device && player && (
        <SpotifyPlaybackPlayer
          deviceIsReady={device?.status}
          playback={playback || undefined}
          player={player}
          onLinkClick={onLinkClick}
        />
      )}
      <h1>👋 Welcome to react-spotify-playback-player</h1>
      <h3>This component is a player that is able to play songs via Spotify</h3>
      <Atom.FormContainer>
        <Atom.FormParagraph>
          You can see how to use this component in the official documentation,
          to see the documentation access the link:
          <Atom.FormAnchor href="https://github.com/ArielBetti" target="_blank">
            how to use
          </Atom.FormAnchor>
        </Atom.FormParagraph>
        <Atom.FormUpdatedToken>
          <Input
            label="Your Spotify token"
            name="spotify_token"
            type="text"
            placeholder="example1235"
            value={newToken}
            onChange={(e) => setNewToken(e.target.value)}
          />
          <Input
            label="Your device name"
            name="device_name"
            type="text"
            placeholder="Example device"
            value={newDeviceName}
            onChange={(e) => setNewDeviceName(e.target.value)}
          />
          <div>
            <Button onClick={() => onChangeParams()}>Update</Button>
          </div>
        </Atom.FormUpdatedToken>
        {device && player && (
          <>
            <TrackDemo token={token} />
            <Status />
          </>
        )}
        <Atom.FormContainer>
          <h3>Prop function "onLinkClick" return id album/artist/track </h3>
          <Atom.FormParagraph>
            About <Atom.FormTextHighLight>onLinkClick</Atom.FormTextHighLight>,
            Pass a callback function to receive the id of the song or artists of
            the song example:{" "}
            <Atom.FormTextHighLight>
              (event) ={">"} event.link{" "}
            </Atom.FormTextHighLight>
          </Atom.FormParagraph>
          <Input readOnly label="onLinkClick" value={linkTarget} />
        </Atom.FormContainer>
      </Atom.FormContainer>
    </>
  );
};

export default Form;
