import { useMusicContext } from "@/context/music-provider";
import { useEffect, useState } from "react";
import useStorage from "./useStorage";
import { ISong } from "@/types/music.types";
import { getMusics, searchAlbumsAPI } from "@/services/musicData";

const useFetchIdAlbum = (id: string) => {
  const { addNewAlbum, removeOldAlbum } = useMusicContext();
  const { addAlbum, removeAlbum } = useStorage();
  const [album, setAlbum] = useState<any>();
  const [songs, setSongs] = useState<ISong[]>();
  const [related, setRelated] = useState<any>();
  const [starOn, setStarOn] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const checkFavoriteStorage = async (id: any) => {
    const storedfavorites = await JSON.parse(
      localStorage.getItem("favorite-albums") as any
    );
    const findAlbum = storedfavorites.find(
      (album: any) => album.albumId === Number(id)
    );
    setStarOn(findAlbum);
  };

  const createRelatedAlbums = async (data: any) => {
    const relatedAlbums = await searchAlbumsAPI(data[0].artistName);
    const slicedAlbums = relatedAlbums.slice(1, 4);
    setRelated(slicedAlbums);
  };

  const createSongList = async (data: any) => {
    const onlySongs = data?.filter((elem: any) => elem.wrapperType === "track");
    setAlbum(data);
    setSongs(onlySongs);
  };

  useEffect(() => {
    const saveAlbum = async () => {
      const data = await getMusics(id);
      checkFavoriteStorage(id);
      createRelatedAlbums(data);
      createSongList(data);
      setIsLoading(false);
    };
    saveAlbum();
  }, []);

  const handleAddFavorite = () => {
    const formatAlbum = {
      albumId: album[0].collectionId,
      albumImg: album[0].artworkUrl100,
      albumName: album[0].collectionName,
      artistName: album[0].artistName,
    };
    addAlbum("favorite-albums", formatAlbum);
    addNewAlbum(formatAlbum);
    setStarOn(!starOn);
  };

  const handleRemoveFavorite = () => {
    removeAlbum("favorite-albums", album[0].collectionId);
    removeOldAlbum(album[0].collectionId);
    setStarOn(!starOn);
  };

  return {
    album,
    songs,
    related,
    starOn,
    isLoading,
    handleAddFavorite,
    handleRemoveFavorite,
  };
};

export default useFetchIdAlbum;
