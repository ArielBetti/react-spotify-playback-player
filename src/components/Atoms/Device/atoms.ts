import styled from "styled-components";
import { IDeviceVolumeSlider } from "./types";

export const DeviceControlsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
`;

export const DeviceVolumeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const DeviceVolumeSlider = styled.input<IDeviceVolumeSlider>`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  max-width: 200px;
  border-radius: 10px;
  cursor: pointer;
  height: 5px;
  border-radius: 5px;
  background-color: ${(props) => props?.theme?.secondaryBackgroundColor};
  outline: none;
  background-image: ${(props) =>
    `linear-gradient(${props.theme?.highLightColor}, ${props.theme?.highLightColor})`};
  background-size: ${(props) => `${props.volumeBar}%`};
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
    left: ${(props) => `${props.volumeBar - 1}%`};
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
    left: ${(props) => `${props.volumeBar - 1}%`};
    cursor: grabbing;
  }
`;
