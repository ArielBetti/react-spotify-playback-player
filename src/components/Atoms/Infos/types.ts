import { PlaybackState } from "../../../interfaces";

export interface IPlayerInfoTrackArtists {
  trackArtistTextLength: number;
  trackArtistWidth: number;
  floatbar?: boolean;
}

export interface IPlayerInfoTrackName {
  trackNameTextLength: number;
  trackNameWidth: number;
  floatbar?: boolean;
}

export interface INavigateArtists {
  name: string;
  uri: string;
  link?: string;
}

export interface IPlayerAlbumArt {
  floatbar?: boolean;
}

export interface IPlayerInfos {
  playback?: PlaybackState;
  floatbar?: boolean;
}
