import { FC } from "react";

import * as Atom from "./atoms";
import type { IWebettiInputProps } from "./types";

const Input: FC<IWebettiInputProps> = ({ label, ...rest }) => {
  return (
    <Atom.InputContainer>
      {label && (
        <label>
          <p>{label}</p>
        </label>
      )}
      <Atom.InputComponent {...rest} />
    </Atom.InputContainer>
  );
};

export default Input;
