"use client";

import { IArtist } from "@/types/music.types";
import Loader from "@/app/dashboard/loading";
import AlbumCard from "../album";
import { useFetchSearchAlbums } from "@/hooks/useFetchSearchAlbums";

const SearchList = ({ data }: { data: string }) => {
  const { searchedAlbums, isLoading } = useFetchSearchAlbums(data);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      {searchedAlbums && (
        <section className="container-albums">
          {searchedAlbums?.map((album: IArtist) => (
            <AlbumCard key={album.collectionId} data={album} />
          ))}
        </section>
      )}
    </>
  );
};

export default SearchList;
