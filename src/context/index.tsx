import React from "react";
import { MusicProvider } from "./music-provider";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return <MusicProvider>{children}</MusicProvider>;
};

export default GlobalProvider;
