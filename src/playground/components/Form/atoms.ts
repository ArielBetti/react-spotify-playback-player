import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${(props) => props.theme.spacing.xs};
  width: 100%;
`;

export const FormUpdatedToken = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  width: 100%;
  padding: ${(props) => props.theme.spacing.xs};
  gap: ${(props) => props.theme.spacing.xs};
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const FormParagraph = styled.p`
  line-height: 2em;
`;

export const FormAnchor = styled.a`
  transition: background-color ${(props) => props.theme.transitions.time} ease;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.highLightColor};
  padding: ${(props) => props.theme.spacing.xxxs};
    ${(props) => props.theme.spacing.xxs};
  border-radius: 4px;
  margin-left: ${(props) => props.theme.spacing.xxxs};
  margin-right: ${(props) => props.theme.spacing.xxxs};

  :hover {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const FormTextHighLight = styled.strong`
  transition: background-color ${(props) => props.theme.transitions.time} ease;
  background-color: ${(props) => props.theme.secondaryBackgroundColor};
  color: ${(props) => props.theme.highLightColor};
  padding: ${(props) => props.theme.spacing.xxxs};
    ${(props) => props.theme.spacing.xxs};
  border-radius: 4px;
  margin-left: ${(props) => props.theme.spacing.xxxs};
  margin-right: ${(props) => props.theme.spacing.xxxs};

  :hover {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;
