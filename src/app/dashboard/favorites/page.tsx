"use client";

import AlbumCard from "@/components/album";
import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import { useEffect, useState } from "react";
import "./favorites.scss";
import Loader from "../loading";

const FavoritePage = () => {
  const [favorites, setFavorites] = useState<any>();

  useEffect(() => {
    const showFavorites = async () => {
      const storedfavorites = await JSON.parse(
        localStorage.getItem("favorite-albums") as any
      );
      setFavorites(storedfavorites);
    };
    showFavorites();
  }, []);

  if (!favorites) {
    return <Loader />;
  }

  return (
    <main className="main-favorites">
      <section className="container-search-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      {favorites ? (
        <section className="container-content">
          <h3>Aqui estão os albúns que você curtiu!</h3>
          <section className="container-albums-favorites">
            {favorites?.map((album: any) => (
              <AlbumCard
                key={album.albumId}
                albumId={album.albumId}
                albumImg={album.albumImg}
                albumName={album.albumName}
                artistName={album.artistName}
              />
            ))}
          </section>
        </section>
      ) : (
        <h3>Você não possui nenhum album favorito!!</h3>
      )}
    </main>
  );
};

export default FavoritePage;
