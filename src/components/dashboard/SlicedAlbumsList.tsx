"use client";
import { useFetchDashboard } from "@/hooks/useFetchDashboard";
import { IArtist } from "@/types/music.types";
import AlbumCard from "../album";

const SlicedAlbumsList = () => {
  const { data } = useFetchDashboard();

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
