"use client";

import AlbumCard from "@/components/album";
import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import { useEffect } from "react";
import { searchAlbumsAPI } from "@/services/musicData";
import Loader from "../../loading";
import "./search.scss";
import { useMusicContext } from "@/context/music-provider";

const SearchPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const { searchedAlbums, setSearchedAlbums } = useMusicContext();

  useEffect(() => {
    const saveData = async () => {
      const data = await searchAlbumsAPI(slug);
      setSearchedAlbums(data);
    };
    saveData();
  }, []);

  if (!searchedAlbums) {
    return <Loader />;
  }

  return (
    <main className="main-search">
      <section className="container-seach-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <h3>Resultado da pesquisa: {slug}</h3>
      {searchedAlbums && (
        <section className="container-albums">
          {searchedAlbums?.map((album: any) => (
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
