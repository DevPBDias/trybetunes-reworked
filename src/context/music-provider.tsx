"use client";

import { IAlbum, MusicProps } from "@/types/music.types";
import React, { createContext, useContext, useEffect, useState } from "react";

export const MusicContext = createContext({} as MusicProps);

export const MusicProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<IAlbum[]>([]);
  const [searchedAlbums, setSearchedAlbums] = useState<any>();

  const addNewAlbum = (newAlbum: IAlbum) => {
    if (favorites.length === 0) {
      setFavorites([newAlbum]);
    } else {
      setFavorites([...favorites, newAlbum]);
    }
  };

  const removeOldAlbum = (album: number) => {
    const newFavorites = favorites.filter((item) => item.albumId !== album);
    setFavorites(newFavorites);
  };

  useEffect(() => {
    const showStorage = () => {
      const checkStorage = localStorage.getItem("favorite-albums");

      if (!checkStorage) {
        localStorage.setItem("favorite-albums", JSON.stringify([]));
      } else {
        const storedfavorites = JSON.parse(
          localStorage.getItem("favorite-albums") as any
        );
        setFavorites(storedfavorites);
      }
    };
    showStorage();
  }, []);

  return (
    <MusicContext.Provider
      value={{
        favorites,
        setFavorites,
        searchedAlbums,
        setSearchedAlbums,
        addNewAlbum,
        removeOldAlbum,
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
