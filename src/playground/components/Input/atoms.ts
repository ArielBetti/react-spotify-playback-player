import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const InputComponent = styled.input<HTMLInputElement | any>`
  background-color: ${({ theme }) => theme?.backgroundColor};
  border: none;
  color: ${({ theme }) => theme?.primaryTextColor};
  font-size: 16px;
  padding: 10px;
  width: 100%;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  ::placeholder {
    color: ${({ theme }) => theme?.secondaryTextColor};
  }

  :read-only {
    background-color: #000;
    color: ${({ theme }) => theme?.highLightColor};
    cursor: text;
  }

  :focus {
    outline: 1px solid ${({ theme }) => theme.highLightColor};
  }

  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
