import styled from "styled-components";
import { Container } from "../../Atoms/Container";

// types
import type { IPlayerProgressBarSlider } from "../../Atoms/ProgressBar/types";

export const FloatBarContainer = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  animation: fadeIn 0.3s both;

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

export const FloatBarContent = styled(Container)`
  position: relative;
  flex-direction: column;
  gap: ${(props) => props.theme?.spacing.xxxs};
  width: 95%;
  padding: 10px;
  border-radius: 4px;
  background: ${(props) => props.theme?.backgroundColor};
  margin-bottom: ${(props) => props.theme?.spacing.xxs};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const FloatBarRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FloatBarControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FloatBarMusicProgress = styled.div<IPlayerProgressBarSlider>`
  margin: 0;
  height: 3px;
  border-radius: 10px;
  width: ${(props) => `${props?.progressBarSize}%`};
  background-image: ${(props) =>
    `linear-gradient(${props.theme?.highLightColor}, ${props.theme?.highLightColor})`};
`;
