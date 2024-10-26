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

export type ISong = {
  artistId: number;
  artistName: string;
  artistViewUrl: string;
  artworkUrl30: string;
  artworkUrl60: string;
  artworkUrl100: string;
  collectionCensoredName: string;
  collectionExplicitness: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  collectionViewUrl: string;
  country: string;
  currency: string;
  discCount: number;
  discNumber: number;
  isStreamable: boolean;
  kind: string;
  previewUrl: string;
  primaryGenreName: string;
  releaseDate: string;
  trackCensoredName: string;
  trackCount: number;
  trackExplicitness: string;
  trackId: number;
  trackName: string;
  trackNumber: number;
  trackPrice: number;
  trackTimeMillis: number;
  trackViewUrl: string;
  wrapperType: string;
};
