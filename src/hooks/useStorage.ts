import { IAlbum } from "@/types/music.types";
import { IUser } from "@/types/user.types";

const useStorage = () => {
  const addAlbum = (key: string, value: IAlbum) => {
    const storage = JSON.parse(localStorage.getItem(key) as string);
    storage?.push(value);
    localStorage.setItem(key, JSON.stringify(storage));
  };

  const removeAlbum = (key: string, value: number) => {
    const checkStorage = JSON.parse(localStorage.getItem(key) as any);
    const newStorage = checkStorage?.filter(
      (item: IAlbum) => item.albumId !== value
    );
    localStorage.setItem(key, JSON.stringify(newStorage));
  };

  const addUser = (key: string, value: IUser) => {
    const storage = JSON.parse(localStorage.getItem(key) as string);
    storage?.push(value);
    localStorage.setItem(key, JSON.stringify(storage));
  };

  const removeUser = (key: string, value: string) => {
    const checkStorage = JSON.parse(localStorage.getItem(key) as any);
    const newStorage = checkStorage?.filter(
      (item: IUser) => item.email !== value
    );
    localStorage.setItem(key, JSON.stringify(newStorage));
  };

  const checkEmailInStorage = async (value: string) => {
    const storedUsers = await JSON.parse(
      localStorage.getItem("trybetunes-users") as any
    );

    const checkedUser: boolean = storedUsers?.some(
      (user: IUser) => user.email === value
    );

    return checkedUser;
  };

  return { addAlbum, removeAlbum, addUser, removeUser, checkEmailInStorage };
};

export default useStorage;
