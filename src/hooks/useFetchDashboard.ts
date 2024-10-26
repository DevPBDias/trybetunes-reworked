import { searchAlbumsAPI } from "@/services/musicData";
import { IArtist } from "@/types/music.types";
import { useEffect, useState } from "react";

export const useFetchDashboard = () => {
  const [data, setData] = useState<IArtist[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const saveData = async () => {
    const response = await searchAlbumsAPI("Michael");
    const slicedAlbums = response.slice(0, 6);
    setData(slicedAlbums);
    setIsLoading(false);
  };

  useEffect(() => {
    saveData();
  }, []);

  return { data, isLoading };
};
