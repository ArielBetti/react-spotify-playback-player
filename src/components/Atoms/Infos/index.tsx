/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useRef, useEffect, FC } from "react";

import { useEventEmitter } from "../../../hooks/useEventEmitter";
import { ILinkClick } from "../../../interfaces";

// atoms: components
import * as Atom from "./atoms";

// types
import type { INavigateArtists, IPlayerInfos } from "./types";

// ::
const Infos: FC<IPlayerInfos> = ({ playback, floatbar }) => {
  const { emit } = useEventEmitter();

  // local: states
  const [navigateToArtist, setNavigateToArtist] = useState<INavigateArtists[]>(
    []
  );
  const [navigateToTrack, setNavigateToTrack] = useState<ILinkClick>();

  // references
  const refTrackName = useRef<any>(null);
  const refTrackArtists = useRef<any>(null);

  const onTrackClick = (track: ILinkClick) => {
    emit("trackClick", { link: track.link, name: track.name, uri: track.uri });
  };

  const onArtistClick = (track: ILinkClick) => {
    emit("artistClick", { link: track.link, name: track.name, uri: track.uri });
  };

  useEffect(() => {
    if (
      playback?.track_window &&
      playback?.track_window.current_track?.artists.length > 0
    ) {
      const artistNameList =
        playback?.track_window?.current_track?.artists?.map(
          (artist) => artist?.name
        );

      const artistList = playback?.track_window?.current_track?.artists?.map(
        (artist) => artist
      );

      const normalizeList = artistList?.map((artist, index) => ({
        name: `${
          index + 1 === artistNameList.length
            ? artistNameList[index]
            : `${artistNameList[index]}, `
        }`,
        uri: artist?.uri,
        link: artist?.uri?.replace("spotify:artist:", ""),
      }));

      setNavigateToArtist(normalizeList);

      if (playback?.track_window?.current_track?.album) {
        const albumUri = playback?.track_window?.current_track?.album?.uri;
        setNavigateToTrack({
          link: albumUri.replace("spotify:album:", ""),
          name: playback?.track_window?.current_track?.album?.name,
          uri: playback?.track_window?.current_track?.album?.uri,
        });
      }
    }
  }, [
    playback?.track_window?.current_track?.album,
    playback?.track_window?.current_track?.artists,
  ]);

  if (!playback) return null;

  return (
    <Atom.PlayerInfosContainer>
      <Atom.PlayerInfoAlbumArt
        floatbar={floatbar}
        effect="blur"
        src={playback?.track_window?.current_track?.album?.images[0]?.url}
        alt="Foto do album"
      />
      <Atom.PlayerInfoTextContainer>
        {navigateToTrack && (
          <Atom.PlayerInfoTrackName
            floatbar={floatbar}
            onClick={() => onTrackClick(navigateToTrack)}
            trackNameWidth={refTrackName.current?.scrollWidth}
            trackNameTextLength={refTrackName.current?.innerText.length}
            ref={refTrackName}
          >
            {playback?.track_window?.current_track?.name}
          </Atom.PlayerInfoTrackName>
        )}
        {navigateToArtist && (
          <Atom.PlayerInfoTrackArtists
            floatbar={floatbar}
            trackArtistWidth={refTrackArtists.current?.scrollWidth}
            trackArtistTextLength={refTrackArtists.current?.innerText.length}
            ref={refTrackArtists}
          >
            {navigateToArtist?.map((artist) => (
              <span
                onClick={() =>
                  onArtistClick({
                    link: artist.link,
                    name: artist.name,
                    uri: artist.uri,
                  })
                }
                role="button"
                tabIndex={0}
                key={artist?.uri}
              >
                {artist?.name}
              </span>
            ))}
          </Atom.PlayerInfoTrackArtists>
        )}
      </Atom.PlayerInfoTextContainer>
    </Atom.PlayerInfosContainer>
  );
};

export default Infos;
