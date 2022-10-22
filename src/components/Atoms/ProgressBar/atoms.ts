import styled from "styled-components";

// types
import type { IPlayerProgressBarSlider, IPlayerProgressBarTimer } from "./types";

export const PlayerProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PlayerProgressBarSliderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

export const PlayerProgressBarTimer = styled.span<IPlayerProgressBarTimer>`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 35px;
  color: ${(props) => props?.theme.primaryTextColor};
  font-size: ${(props) => (props.floatbar ? "0.678rem" : "0.978rem")};
  margin: 0px;
`;

export const PlayerProgressBarSlider = styled.input<IPlayerProgressBarSlider>`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  height: ${(props) => (props.floatbar ? "3px" : "5px")};
  border-radius: 5px;
  background-color: ${(props) => props?.theme?.secondaryBackgroundColor};
  outline: none;
  background-image: ${(props) =>
    `linear-gradient(${props.theme?.highLightColor}, ${props.theme?.highLightColor})`};
  background-size: ${(props) => `${props?.progressBarSize}%`};
  background-repeat: no-repeat;
  position: relative;
  :hover {
    opacity: 0.9;
    ::-webkit-slider-thumb {
      background-color: ${(props) => props?.theme?.highLightColor};
      border: 2px solid ${(props) => props?.theme?.secondaryBackgroundColor};
    }
    ::-moz-range-thumb {
      background-color: ${(props) => props?.theme?.highLightColor};
      border: 2px solid ${(props) => props?.theme?.secondaryBackgroundColor};
    }
  }
  ::-webkit-slider-thumb {
    appearance: none;
    width: 13px;
    height: 13px;
    position: absolute;
    background: transparent;
    border-radius: 10px;
    top: -4px;
    left: ${(props) => `${props?.progressBarSize - 1}%`};
    cursor: grabbing;
  }
  ::-moz-range-thumb {
    border: none;
    appearance: none;
    width: 13px;
    height: 13px;
    position: absolute;
    background: transparent;
    border-radius: 10px;
    top: -4px;
    left: ${(props) => `${props?.progressBarSize - 1}%`};
    cursor: grabbing;
  }
`;
