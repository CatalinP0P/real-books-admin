import React, { FC, ButtonHTMLAttributes, EventHandler } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  rounded?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  children,
  className,
  onClick,
  variant = "primary",
  rounded = true,
  ...props
}: ButtonProps) {
  var style = `transition-all box-border active:border-2 active:border-spacing-8 active:border-white text-xl p-2 ${
    variant == "primary" ? "text-white" : "text-primary"
  } ${rounded ? "rounded-full" : ""} ${
    variant == "primary"
      ? "bg-secondary border-secondary hover:bg-secondary/75 hover:border-secondary/75"
      : "border-2 border-secondary text-secondary hover:border-secondary/75 hover:text-secondary/75"
  }  ${className}`;

  return (
    <button className={style} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
