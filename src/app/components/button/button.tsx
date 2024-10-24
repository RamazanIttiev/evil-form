import { ButtonHTMLAttributes } from "react";
import cn from "classnames";

import "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  isLoading?: boolean;
}

const baseClassName = "evil-button";

export const Button = (props: ButtonProps) => {
  const { isLoading, content, ...restProps } = props;

  const classes = cn(baseClassName, isLoading && `${baseClassName}_loading`);

  return (
    <button
      type="button"
      className={classes}
      disabled={isLoading || restProps.disabled}
      {...restProps}
    >
      <span className={`${baseClassName}__text`}>{content}</span>
    </button>
  );
};
