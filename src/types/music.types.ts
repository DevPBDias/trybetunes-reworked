export type IAlbum = {
  albumId: string | number;
  albumName: string;
  artistName: string;
  albumImg: string;
};

export type IArtist = {
  artistId: number;
  artistName: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  artworkUrl100: string;
  releaseDate: string;
  trackCount: number;
};

export type MusicProps = {
  searchedAlbums: IArtist[];
  setSearchedAlbums: React.Dispatch<React.SetStateAction<IArtist[]>>;
  favorites: IAlbum[];
  setFavorites: React.Dispatch<React.SetStateAction<IAlbum[]>>;
  addNewAlbum: (newAlbum: IAlbum) => void;
  removeOldAlbum: (album: number) => void;
};
