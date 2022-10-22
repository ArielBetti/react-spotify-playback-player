import styled from "styled-components";
import type { IPlayerButton } from "./types";

export const PlayerControlsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const PlayerButton = styled.button<IPlayerButton>`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0;
  cursor: ${(props) => (props?.hasDisabled ? "initial" : "pointer")};
`;

