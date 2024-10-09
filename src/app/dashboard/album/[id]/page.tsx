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
import { useMusicContext } from "@/context/music-provider";

const AlbumID = ({ params }: { params: { id: string } }) => {
  const { addNewAlbum, addStorage, removeAlbum, removeStorage } =
    useMusicContext();
  const { id } = params;
  const [album, setAlbum] = useState<any>();
  const [songs, setSongs] = useState<any>();
  const [related, setRelated] = useState<any>();
  const [starOn, setStarOn] = useState<any>(true);

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

  const handleAddFavorite = () => {
    const formatAlbum = {
      albumId: album[0].collectionId,
      albumImg: album[0].artworkUrl100,
      albumName: album[0].collectionName,
      artistName: album[0].artistName,
    };
    addStorage("favorite-albums", formatAlbum);
    addNewAlbum(formatAlbum);
    setStarOn(!starOn);
  };

  const handleRemoveFavorite = () => {
    removeStorage("favorite-albums", album[0].collectionId);
    removeAlbum(album[0].collectionId);
    setStarOn(!starOn);
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
                {starOn ? (
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
