// .ladle/components.tsx
import React from "react";
import "./ladle-styles.css";

export const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};