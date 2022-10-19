import { InputHTMLAttributes } from "react";

export interface IWebettiInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
