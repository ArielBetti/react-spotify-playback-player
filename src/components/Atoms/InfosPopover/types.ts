import { Dispatch, ReactNode } from "react";

export interface IPopoverProps {
  children?: ReactNode;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}
