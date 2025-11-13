import React, { createContext, useContext, useState } from "react";

import type { Nav } from "@src/interfaces/nav";

interface NavContextType {
  activeNav: Nav | null;
  setActiveNav: (nav: Nav) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeNav, setActiveNav] = useState<Nav | null>(null);

  return (
    <NavContext.Provider value={{ activeNav, setActiveNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNavContext = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error("useJobContext must be used within a JobProvider");
  }
  return context;
};
