"use client";

import AlbumCard from "@/components/album";
import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import { useEffect, useState } from "react";
import "./search.scss";
import { searchAlbumsAPI } from "@/services/musicData";

const SearchPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [albums, setAlbums] = useState<any>();

  useEffect(() => {
    const saveData = async () => {
      const data = await searchAlbumsAPI(slug);
      setAlbums(data);
    };
    saveData();
  }, []);

  return (
    <main className="main-search">
      <section className="container-seach-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <h3>Resultado da pesquisa: {slug}</h3>
      {albums && (
        <section className="container-albums">
          {albums?.map((album: any) => (
            <AlbumCard
              key={album.collectionId}
              albumId={album.collectionId}
              albumImg={album.artworkUrl100}
              albumName={album.collectionName}
              artistName={album.artistName}
            />
          ))}
        </section>
      )}
    </main>
  );
};

export default SearchPage;
