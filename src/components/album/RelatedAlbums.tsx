"use client";

import useFetchIdAlbum from "@/hooks/useFetchIdAlbum";
import AlbumCard from ".";
import Loader from "@/app/dashboard/loading";

const RelatedAlbums = ({ id }: { id: string }) => {
  const { related, isLoading } = useFetchIdAlbum(id);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="container-related">
      {related &&
        related?.map((album: any) => (
          <AlbumCard key={album.collectionId} data={album} />
        ))}
    </div>
  );
};

export default RelatedAlbums;
