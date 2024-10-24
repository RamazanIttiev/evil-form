import { InputHTMLAttributes } from "react";
import cn from "classnames";

import "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const baseClass = "evil-input";

export const Input = (props: InputProps) => {
  const { error } = props;

  const fullClassName = cn(baseClass, error && `${baseClass}_error`);

  return (
    <input
      {...props}
      className={fullClassName}
      aria-invalid={error ? true : undefined}
      type={"text"}
    />
  );
};
