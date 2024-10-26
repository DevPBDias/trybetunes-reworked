import { useMusicContext } from "@/context/music-provider";
import { useEffect, useState } from "react";

export const useFetchFavorites = () => {
  const { favorites, setFavorites } = useMusicContext();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const showFavorites = async () => {
      const storedfavorites = await JSON.parse(
        localStorage.getItem("favorite-albums") as any
      );
      setFavorites(storedfavorites);
      setIsLoading(false);
    };
    showFavorites();
  }, []);

  return { favorites, isLoading };
};
