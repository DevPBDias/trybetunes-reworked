"use client";

import AlbumCard from "@/components/albumCard/AlbumCard";
import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import { useState } from "react";
import "./favorites.scss";

const FavoritePage = () => {
  const [getAlbums, setGetAlbums] = useState(true);

  return (
    <main className="main-favorites">
      <section className="container-search-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      {getAlbums ? (
        <h3>Aqui estão os albúns que você curtiu!</h3>
      ) : (
        <h3>Você não possui nenhum album favorito!!</h3>
      )}
      <section className="container-albums-favorites">
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
        <AlbumCard />
      </section>
    </main>
  );
};

export default FavoritePage;
