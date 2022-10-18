import { ButtonHTMLAttributes } from "react";

export interface IPlayerButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasDisabled?: boolean;
}
