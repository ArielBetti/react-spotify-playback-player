import styled from "styled-components";
import * as Popover from "@radix-ui/react-popover";

export const PlayerPopoverTrigger = styled(Popover.Trigger)`
  background-color: transparent;
  margin: 0;
  padding: 0;
  border: none;
`;

export const PlayerPopoverContent = styled(Popover.Content)`
  background: ${(props) => props.theme.popOverColor};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    ${(props) => `${props.theme.backgroundColor}54`} 0px 1px 0px 1px inset;
  padding: 10px 5px;
  min-width: 200px;
  border-radius: 4px;
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

export const PlayerPopoverArrow = styled(Popover.Arrow)`
  fill: ${(props) => props.theme.popOverColor};
  animation: fadeIn 0.3s both;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;
