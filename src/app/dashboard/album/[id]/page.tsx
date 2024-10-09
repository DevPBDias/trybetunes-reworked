"use client";

import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import "./styles.scss";
import { useEffect, useState } from "react";
import { getMusics, searchAlbumsAPI } from "@/services/musicData";
import { getYearReleased } from "@/utils";
import PlayerCard from "@/components/player";
import AlbumCard from "@/components/album";

const AlbumID = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [album, setAlbum] = useState<any>();
  const [songs, setSongs] = useState<any>();
  const [related, setRelated] = useState<any>();

  useEffect(() => {
    const saveAlbum = async () => {
      const data = await getMusics(id);
      const relatedAlbums = await searchAlbumsAPI(data[0].artistName);
      const slicedAlbums = relatedAlbums.slice(1, 4);
      setRelated(slicedAlbums);
      const onlySongs = data?.filter(
        (elem: any) => elem.wrapperType === "track"
      );
      setAlbum(data);
      setSongs(onlySongs);
    };
    saveAlbum();
  }, []);

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
                src={album[0]?.artworkUrl100}
                alt="album image"
              />
            </picture>
          ) : (
            "Carregando ..."
          )}
          <div className="related-albums">
            <h3>Veja outros álbuns</h3>
            <div className="container-related">
              {related ? (
                related?.map((album: any) => (
                  <AlbumCard
                    key={album.collectionId}
                    albumId={album.collectionId}
                    albumImg={album.artworkUrl100}
                    albumName={album.collectionName}
                    artistName={album.artistName}
                  />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </section>
        <section className="second-content-albums">
          {album ? (
            <div className="info-album">
              <h1>{album[0]?.collectionName}</h1>
              <p>{album[0]?.artistName}</p>
              <p>Lançado em: {getYearReleased(album[0]?.releaseDate)}</p>
              <p>Este álbum possui {album[0]?.trackCount} músicas</p>
              <p>{album[0]?.primaryGenreName}</p>
            </div>
          ) : (
            "Carregando ..."
          )}
          <div className="container-musics">
            {songs && <PlayerCard data={songs} />}
          </div>
        </section>
      </section>
    </main>
  );
};

export default AlbumID;
