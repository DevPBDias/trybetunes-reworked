"use client";

import Loader from "@/app/dashboard/loading";
import useFetchIdAlbum from "@/hooks/useFetchIdAlbum";
import { getYearReleased } from "@/utils";
import { Star, StarOff } from "lucide-react";

const AlbumsTags = ({ id }: { id: string }) => {
  const { album, starOn, handleAddFavorite, handleRemoveFavorite, isLoading } =
    useFetchIdAlbum(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
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
            {!starOn ? (
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
    </>
  );
};

export default AlbumsTags;
