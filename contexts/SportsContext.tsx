"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

interface SportsContextType {
  selectedSports: string[];
  setSelectedSports: React.Dispatch<React.SetStateAction<string[]>>;
  setFavoriteSports: (sports: string[]) => void; // Add this line
}

const SportsContext = createContext<SportsContextType | undefined>(undefined);

export function SportsProvider({ children }: { children: ReactNode }) {
  const [selectedSports, setSelectedSports] = useState<string[]>([]);

  const setFavoriteSports = (sports: string[]) => {
    setSelectedSports(sports);
  };

  return (
    <SportsContext.Provider value={{ selectedSports, setSelectedSports, setFavoriteSports }}>
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
