"use client";

import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import "./styles.scss";
import AlbumCard from "@/components/albumCard/AlbumCard";
import { useEffect, useState } from "react";
import { musicCoreApi } from "@/services/musicData";

const AlbumID = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [album, setAlbum] = useState<any>();
  const [songs, setSongs] = useState<any>();

  useEffect(() => {
    const saveAlbum = async () => {
      const data = await musicCoreApi(`artist/details/?id=344497`);
      const musics = await musicCoreApi(
        `artist/songs/?id=344497&sort=title&per_page=20&page=1`
      );
      console.log(data);
      console.log(musics);
      setAlbum(data);
      setSongs(musics);
    };
    saveAlbum();
  }, []);

  console.log(album);

  return (
    <main className="main-album-id">
      <section className="container-seach-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <section className="container-content">
        <section className="first-content-albums">
          {album ? (
            <picture>
              <img
                className="album-image-big"
                src={album?.artist.image_url}
                alt="album image"
              />
            </picture>
          ) : (
            "Carregando ..."
          )}
          <div className="related-albums">
            <h3>Veja outros álbuns</h3>
            <div className="container-related">
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
              <AlbumCard />
            </div>
          </div>
        </section>
        <section className="second-content-albums">
          <div className="info-album">
            <h1>{album?.artist.collectionName}</h1>
            <p>{album?.artist.name}</p>
            <p>Lançado em: 2003</p>
            <p>Este álbum possui 20 músicas</p>
          </div>
          <div className="container-musics"></div>
        </section>
      </section>
    </main>
  );
};

export default AlbumID;
