import { useMusicContext } from "@/context/music-provider";
import { searchAlbumsAPI } from "@/services/musicData";
import { useEffect, useState } from "react";

export const useFetchSearchAlbums = (slug: string) => {
  const { searchedAlbums, setSearchedAlbums } = useMusicContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const saveData = async () => {
      const data = await searchAlbumsAPI(slug);
      setSearchedAlbums(data);
      setIsLoading(false);
    };
    saveData();
  }, []);

  return { searchedAlbums, isLoading };
};
