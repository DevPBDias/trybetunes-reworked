"use client";

import AlbumCard from "@/components/player";
import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import { useState } from "react";
import "./search.scss";

const SearchPage = () => {
  const [getAlbums, setGetAlbums] = useState(true);

  return (
    <main className="main-search">
      <section className="container-seach-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      {getAlbums ? (
        <h3>Resultado da pesquisa: Linkin Park</h3>
      ) : (
        <h3>Não foi encontrando nenhum album com esse nome:</h3>
      )}
      <section className="container-albums">
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

export default SearchPage;
