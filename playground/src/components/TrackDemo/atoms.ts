import styled from "styled-components";

export const TrackDemoContainer = styled.div`
  animation: fadeIn 0.5s both;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  border-radius: 4px;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.theme.spacing.xxs};
  width: 100%;
  max-width: 200px;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(40px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

export const TrackDemoInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: ${(props) => props.theme.spacing.xs};
`;

export const TrackDemoInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  p {
    color: ${(props) => props.theme.primaryTextColor};
    font-size: 1.25em;
  }

  span {
    color: ${(props) => props.theme.secondaryTextColor};
    font-size: 1em;
  }
`;
