import { InputHTMLAttributes } from "react";
import cn from "classnames";

import "./input.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
}

const baseClass = "evil-input";

export const Input = (props: InputProps) => {
  const { error } = props;

  const fullClassName = cn(baseClass, error && `${baseClass}_error`);

  return (
    <div className={fullClassName}>
      <input
        {...props}
        placeholder={props.label}
        className={`${baseClass}__inner`}
      />
      <label htmlFor={props.name} className={`${baseClass}__label`}>
        {props.label}
      </label>
      {error && <span className={`${baseClass}__error`}>{error}</span>}
    </div>
  );
};
