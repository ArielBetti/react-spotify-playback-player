import { FC } from "react";

// components
import * as Atom from "./atoms";

// types
import type { IButton } from "./types";

// ::
const Button: FC<IButton> = ({ children, disabled, onClick }) => {
  return (
    <Atom.Button disabled={disabled} onClick={onClick}>
      {children}
    </Atom.Button>
  );
};

export default Button;
