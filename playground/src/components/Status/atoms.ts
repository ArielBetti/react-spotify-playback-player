import styled from "styled-components";
import { FormContainer } from "../Form/atoms";

export const StatusContainer = styled(FormContainer)`
  animation: fadeIn 0.5s both;

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
