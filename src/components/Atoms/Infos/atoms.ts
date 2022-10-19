import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { IPlayerInfoTrackArtists, IPlayerInfoTrackName } from "./types";

export const PlayerInfosContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 250px;
  @media (max-width: ${(props) => props.theme?.breakpoints.md}) {
    max-width: 90%;
  }
`;

export const PlayerInfoAlbumArt = styled(LazyLoadImage)`
  width: 60px;
  height: 60px;
`;

export const PlayerInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  padding-left: ${(props) => props.theme?.spacing.xxs};
  @media (max-width: ${(props) => props.theme?.breakpoints.sm}) {
    max-width: 90%;
  }
`;

export const PlayerInfoTrackName = styled.p<IPlayerInfoTrackName>`
  transition: linear 2.5s transform;
  font-size: 0.978rem;
  color: ${(props) => props.theme.primaryTextColor};
  margin: 0px;
  width: auto;
  cursor: pointer;
  :hover {
    text-decoration: underline;

    ${(props) =>
      props.trackNameTextLength > 20 &&
      `
      transform: translateX(-${props.trackNameWidth - 140}px);
    `}
  }
`;

export const PlayerInfoTrackArtists = styled.span<IPlayerInfoTrackArtists>`
  transition: linear 2.5s transform;
  width: auto;
  cursor: default;
  font-size: 0.8975rem;
  margin: 0px;
  color: ${(props) => props.theme.secondaryTextColor};

  span {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  :hover {
    ${(props) =>
      props.trackArtistTextLength > 20 &&
      `
      transform: translateX(-${props.trackArtistWidth - 160}px);
    `}
  }
`;
