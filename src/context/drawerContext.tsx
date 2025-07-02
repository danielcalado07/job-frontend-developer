"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface DrawerContextType {
  open: boolean;
  toggleDrawer: () => void;
}

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

interface DrawerProviderProps {
  children: ReactNode;
}

export function DrawerProvider({ children }: DrawerProviderProps) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <DrawerContext.Provider value={{ open, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export function useDrawer() {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useDrawer must be used within a DrawerProvider");
  }
  return context;
}
