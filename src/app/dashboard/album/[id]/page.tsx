"use client";

import DateAndWheater from "@/components/dateAndWheater";
import SearchBar from "@/components/searchBar";
import { useEffect, useState } from "react";
import { getMusics, searchAlbumsAPI } from "@/services/musicData";
import { getYearReleased } from "@/utils";
import PlayerCard from "@/components/player";
import AlbumCard from "@/components/album";
import Loader from "../../loading";
import "./styles.scss";
import { Star, StarOff } from "lucide-react";

const AlbumID = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const [album, setAlbum] = useState<any>();
  const [songs, setSongs] = useState<any>();
  const [related, setRelated] = useState<any>();
  const [favorite, setFavorite] = useState<any>(true);

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

  if (!related && !songs && !album) {
    return <Loader />;
  }
  const handleAddFavorite = async () => {
    const formatStorage = {
      albumId: album[0].collectionId,
      albumImg: album[0].artworkUrl100,
      albumName: album[0].collectionName,
      artistName: album[0].artistName,
    };
    localStorage.setItem("favorite-albums", JSON.stringify([formatStorage]));
    setFavorite(!favorite);
  };

  const handleRemoveFavorite = async () => {
    const getFavorites = JSON.parse(
      localStorage.getItem("favorite-albums") as any
    );
    const removeAlbum = getFavorites?.filter(
      (fav: any) => fav.albumId !== album[0].collectionId
    );
    localStorage.setItem("favorite-albums", JSON.stringify(removeAlbum));
    setFavorite(!favorite);
  };

  return (
    <main className="main-album-id">
      <section className="container-seach-date">
        <SearchBar />
        <DateAndWheater />
      </section>
      <section className="container-content">
        <section className="first-content-albums">
          {album && (
            <picture>
              <img
                className="album-image-big"
                src={album[0]?.artworkUrl100}
                alt="album image"
              />
            </picture>
          )}
          <div className="related-albums">
            <h3>Veja outros álbuns</h3>
            <div className="container-related">
              {related &&
                related?.map((album: any) => (
                  <AlbumCard
                    key={album.collectionId}
                    albumId={album.collectionId}
                    albumImg={album.artworkUrl100}
                    albumName={album.collectionName}
                    artistName={album.artistName}
                  />
                ))}
            </div>
          </div>
        </section>
        <section className="second-content-albums">
          {album && (
            <div className="info-album">
              <h1>{album[0]?.collectionName}</h1>
              <div className="container-tags">
                <div className="container-info">
                  <p>Artistas: {album[0]?.artistName}</p>
                  <p>{album[0]?.trackCount} músicas</p>
                </div>
                <div className="container-info">
                  <p>{getYearReleased(album[0]?.releaseDate)}</p>
                  <p>{album[0]?.primaryGenreName}</p>
                </div>
                {favorite ? (
                  <button
                    type="button"
                    className="star-btn"
                    onClick={handleAddFavorite}
                  >
                    <StarOff size={32} color="#EBFFEB" />
                  </button>
                ) : (
                  <button
                    type="button"
                    className="star-btn"
                    onClick={handleRemoveFavorite}
                  >
                    <Star size={32} color="#EBFFEB" />
                  </button>
                )}
              </div>
            </div>
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
