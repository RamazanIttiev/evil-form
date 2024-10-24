import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const baseClassName = "evil-button";

export const Button = (props: ButtonProps) => {
  const { isLoading, ...restProps } = props;

  const classes = cn(baseClassName, isLoading && `${baseClassName}_loading`);

  return (
    <button type="button" className={classes} {...restProps}>
      <span className={`${baseClassName}__text`}>Submit</span>
    </button>
  );
};
