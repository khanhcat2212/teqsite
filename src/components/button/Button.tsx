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
    "bg-white text-black hover:bg-white-100": variant === "secondary",
  });

  const sizeStyle = clsx({
    "px-[20px] py-[8px] text-[12px]": size === "sm",
    "px-[24px] py-[10px] text-[14px]": size === "md",
    "px-[28px] py-[12px] text-[16px]": size === "lg",
    "px-[8px] py-[8px]": size === "icon",
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
