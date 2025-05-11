// context/NavigationContext.jsx
"use client";
import { createContext, useContext, useState } from "react";

const NavigationContext = createContext();

export function NavigationProvider({ children }) {
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <NavigationContext.Provider value={{ openNavigation, setOpenNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);
