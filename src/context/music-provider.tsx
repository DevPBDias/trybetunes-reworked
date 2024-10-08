"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface MusicProps {
  searchedName: string;
  setSearchedName: React.Dispatch<React.SetStateAction<string>>;
}

export const MusicContext = createContext<MusicProps | undefined>(undefined);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchedName, setSearchedName] = useState("");

  return (
    <MusicContext.Provider
      value={{
        searchedName,
        setSearchedName,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusicContext = (): MusicProps => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error("MusicContext deve ser usado dentro de um UserProvider");
  }
  return context;
};
