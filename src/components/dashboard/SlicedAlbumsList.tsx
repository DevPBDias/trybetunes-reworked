"use client";
import { useFetchDashboard } from "@/hooks/useFetchDashboard";
import { IArtist } from "@/types/music.types";
import AlbumCard from "../album";

const SlicedAlbumsList = () => {
  const { data, isLoading } = useFetchDashboard();

  if (isLoading) {
    return <div className="container-cards">Carregando .....</div>;
  }

  return (
    <div className="container-cards">
      {data &&
        data?.map((album: IArtist) => (
          <AlbumCard key={album.collectionId} data={album} />
        ))}
    </div>
  );
};

export default SlicedAlbumsList;
