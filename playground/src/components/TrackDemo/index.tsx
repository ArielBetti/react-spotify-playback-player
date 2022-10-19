import { FC, useEffect, useState, memo } from "react";
import { requester } from "../../api/requester";
import { useTheme } from "styled-components";
import { usePlayerDevice } from "react-spotify-web-playback-sdk";

// icons
import { MdPlayArrow } from "react-icons/md";

// types
import type { ITrack, ITrackDemoProps } from "./types";

// components
import * as Atom from "./atoms";
import { LazyLoadImage } from "react-lazy-load-image-component";

// ::
const TrackDemo: FC<ITrackDemoProps> = ({ token }) => {
  const theme = useTheme();
  const device = usePlayerDevice();

  const [track, setTrack] = useState<ITrack>();

  const getTrack = async () => {
    const { data } = await requester({
      Authorization: `Bearer ${token}`,
    }).get("https://api.spotify.com/v1/tracks/2uAf42OjfEMIIzF3QCjBSO");

    const trackLoadable: ITrack = data;

    setTrack(trackLoadable);
  };

  const togglePlay = async () => {
    const { data } = await requester({
      Authorization: `Bearer ${token}`,
    }).put(
      `me/player/play?device_id=${device?.device_id}`,
      JSON.stringify({ uris: [track?.uri] })
    );

    return data;
  };

  useEffect(() => {
    if (token && device?.status === "ready") {
      getTrack();
    }
  }, [device]);

  if (!track?.id) return null;

  return (
    <Atom.TrackDemoContainer>
      <Atom.TrackDemoInfoContainer>
        <LazyLoadImage
          width={track.album.images[0].width}
          src={track.album.images[0].url}
          loading="lazy"
          effect="blur"
        />
        <Atom.TrackDemoInfo>
          <p>{track.name}</p>
          <span>{track.artists[0].name}</span>
        </Atom.TrackDemoInfo>
        <MdPlayArrow
          cursor="pointer"
          onClick={() => togglePlay()}
          size={40}
          color={theme.primaryTextColor}
        />
      </Atom.TrackDemoInfoContainer>
    </Atom.TrackDemoContainer>
  );
};

export default memo(TrackDemo);
