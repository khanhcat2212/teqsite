import React, { forwardRef } from "react";
import clsx from "clsx";
import { CircleAlert, Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: "primary" | "secondary" | "search" | "error";
  error?: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, variant = "primary", error, placeholder, className, ...props }) => {
    const baseStyle =
      "flex items-center rounded-sm text-[14px] border border-grey-100 h-[38px] transition w-full";
    const variantStyle = clsx({
      "hover:border-black focus-within:border-black": variant === "primary",
      "border border-red": variant === "error",
    });
    return (
      <div className={clsx(baseStyle, variantStyle, className)}>
        {variant === "search" && (
          <Search className="ml-2 shrink-0 text-black w-4 h-4" />
        )}
        {variant === "secondary" && (
          <div className="flex h-[37px] px-2 text-grey-400 items-center justify-center bg-white-200 border-r border-grey-100">
            {label}
          </div>
        )}
        <input
          className="w-full px-4 py-2 bg-transparent placeholder:italic placeholder:text-grey-400 text-inherit outline-none"
          type="text"
          placeholder={placeholder}
          {...props}
        />
        {variant === "error" && (
          <div className="relative group ml-2">
            <CircleAlert size={20} className="text-red cursor-pointer mr-4" />
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-max px-2 py-1 text-xs text-white bg-red rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              This field is required
            </div>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
