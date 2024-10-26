"use client";

import Loader from "@/app/dashboard/loading";
import useFetchIdAlbum from "@/hooks/useFetchIdAlbum";

const AlbumImg = ({ id }: { id: string }) => {
  const { album, isLoading } = useFetchIdAlbum(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {album && (
        <picture>
          <img
            className="album-image-big"
            src={album[0]?.artworkUrl100}
            alt="album image"
          />
        </picture>
      )}
    </>
  );
};

export default AlbumImg;
