import { useState } from "react";
import SpotifyPlaybackPlayer from "../../../container";

// components
import * as Atom from "./atoms";
import Status from "../../Status";
import Button from "../Button";
import Input from "../Input";
import TrackDemo from "../TrackDemo";

// types
interface IPlaygroundFormParams {
  token: string;
  deviceName: string;
}

// ::
const Form = () => {
  const [deviceName, setDiviceName] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [linkTarget, setLinkTarget] = useState<string>("");
  const [params, setParams] = useState<IPlaygroundFormParams>({
    token: "",
    deviceName: "",
  });

  const onLinkClick = (event: { link?: string }) => {
    if (event?.link) {
      return setLinkTarget(event.link);
    }
  };

  return (
    <>
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
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <Input
            label="Your device name"
            name="device_name"
            type="text"
            placeholder="Example device"
            value={deviceName}
            onChange={(e) => setDiviceName(e.target.value)}
          />
          <div>
            <Button
              onClick={() =>
                setParams({
                  token,
                  deviceName,
                })
              }
            >
              Update
            </Button>
          </div>
        </Atom.FormUpdatedToken>
        <SpotifyPlaybackPlayer
          onLinkClick={onLinkClick}
          deviceName={params.deviceName}
          token={params.token}
        >
          <TrackDemo token={params.token} />

          <Status />
        </SpotifyPlaybackPlayer>
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
