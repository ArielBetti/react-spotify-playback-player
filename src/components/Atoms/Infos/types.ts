import { PlaybackState } from "../../../interfaces";

export interface IPlayerInfoTrackArtists {
  trackArtistTextLength: number;
  trackArtistWidth: number;
}

export interface IPlayerInfoTrackName {
  trackNameTextLength: number;
  trackNameWidth: number;
}

export interface INavigateArtists {
  name: string;
  uri: string;
}

export interface IPlayerInfos {
  playback?: PlaybackState;
}
