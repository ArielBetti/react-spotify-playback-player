import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing.xxs};
  margin-top: ${(props) => props.theme.spacing.xxs};
`;

export const HeaderItem = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  align-items: center;
  cursor: pointer;
  border-radius: 6px;
  padding: ${(props) => props.theme.spacing.xs};
  transition: background-color ${(props) => props.theme.transitions.time} ease;

  :hover {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
