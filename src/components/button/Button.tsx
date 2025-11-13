import React from "react";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "lg",
  type = "button",
  className,
  ...props
}) => {
  const baseStyle = "rounded-sm focus:outline-none transition cursor-pointer";

  const variantStyle = clsx({
    "bg-black text-white hover:bg-black-200": variant === "primary",
    "text-black hover:bg-white-100": variant === "secondary",
  });

  const sizeStyle = clsx({
    "px-[1.25rem] py-[.5rem] text-[.75rem]": size === "sm",
    "px-[1.5rem] py-[.625rem] text-[.875rem]": size === "md",
    "px-[1.75rem] py-[.75rem] text-[1rem]": size === "lg",
    "px-[.5rem] py-[.5rem]": size === "icon",
  });

  return (
    <button
      type={type}
      className={clsx(baseStyle, variantStyle, sizeStyle, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
