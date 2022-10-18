import styled from "styled-components";
import { Container } from "../../Atoms/Container";

export const PlayerContainer = styled.div`
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  left: 0;
  padding: 10px 0px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  border-top: 1px solid ${(props) => props.theme?.secondaryBackgroundColor};
  background: ${(props) => props.theme?.backgroundColor};
`;

export const PlayerSeekBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PlayerBarContainer = styled(Container)`
  flex-direction: row;
  gap: 10px;
  @media (max-width: ${(props) => props.theme?.breakpoints.md}) {
    flex-direction: column;
  }
`;
