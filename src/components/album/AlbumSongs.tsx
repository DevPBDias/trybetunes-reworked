"use client";

import useFetchIdAlbum from "@/hooks/useFetchIdAlbum";
import PlayerList from "../player";
import Loader from "@/app/dashboard/loading";

const AlbumSongs = ({ id }: { id: string }) => {
  const { songs, isLoading } = useFetchIdAlbum(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container-musics">
      {songs && <PlayerList data={songs} />}
    </div>
  );
};

export default AlbumSongs;
