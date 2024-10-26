"use client";

import AlbumCard from "@/components/album";
import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import { useEffect } from "react";
import { searchAlbumsAPI } from "@/services/musicData";
import Loader from "../../loading";
import "./search.scss";
import { useMusicContext } from "@/context/music-provider";
import { IArtist } from "@/types/music.types";

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
      <section className="container-search-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <h3>Resultado da pesquisa: {slug}</h3>
      {searchedAlbums && (
        <section className="container-albums">
          {searchedAlbums?.map((album: IArtist) => (
            <AlbumCard key={album.collectionId} data={album} />
          ))}
        </section>
      )}
    </main>
  );
};

export default SearchPage;
