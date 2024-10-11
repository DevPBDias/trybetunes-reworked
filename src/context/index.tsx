import React from "react";
import { MusicProvider } from "./music-provider";
import { UserProvider } from "./user-provider";

const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <MusicProvider>{children}</MusicProvider>;
    </UserProvider>
  );
};

export default GlobalProvider;
