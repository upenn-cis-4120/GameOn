"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface SportsContextType {
  selectedSports: string[];
  setSelectedSports: React.Dispatch<React.SetStateAction<string[]>>;
}

const SportsContext = createContext<SportsContextType | undefined>(undefined);

export function SportsProvider({ children }: { children: ReactNode }) {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  return (
    <SportsContext.Provider value={{ selectedSports, setSelectedSports }}>
      {children}
    </SportsContext.Provider>
  );
}

export function useSports() {
  const context = useContext(SportsContext);
  if (context === undefined) {
    throw new Error("useSports must be used within a SportsProvider");
  }
  return context;
}
