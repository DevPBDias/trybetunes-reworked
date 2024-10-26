"use client";

import { useFetchFavorites } from "@/hooks/useFetchFavorites";
import { IAlbum } from "@/types/music.types";
import FavoriteCard from "./FavoriteCard";
import Loader from "@/app/dashboard/loading";

const FavoriteList = () => {
  const { favorites, isLoading } = useFetchFavorites();

  if (!favorites) {
    return <Loader />;
  }

  return (
    <>
      {favorites ? (
        <section className="container-content">
          <h3>Aqui estão os albúns que você curtiu!</h3>
          <section className="container-albums-favorites">
            {favorites?.map((album: IAlbum) => (
              <FavoriteCard key={album.albumId} data={album} />
            ))}
          </section>
        </section>
      ) : (
        <h3>Você não possui nenhum album favorito!!</h3>
      )}
    </>
  );
};

export default FavoriteList;
