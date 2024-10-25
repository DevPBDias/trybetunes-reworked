import { IArtist } from "@/types/music.types";

export const getMusics = async (id: string | undefined) => {
  const request = await fetch(
    `https://itunes.apple.com/lookup?id=${id}&entity=song`
  );
  const requestJson = await request.json();
  return requestJson.results;
};

export const searchAlbumsAPI = async (artist: string) => {
  const artistNameURL = encodeURI(artist).replaceAll("%20", "+");

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}&attribute=allArtistTerm`;
  const APIResponse = await fetch(getAlbumsAPI);
  const { results } = await APIResponse.json();

  const response: IArtist[] = results.map(
    ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
      releaseDate,
      trackCount,
    }: IArtist) => ({
      artistId,
      artistName,
      collectionId,
      collectionName,
      collectionPrice,
      artworkUrl100,
      releaseDate,
      trackCount,
    })
  );
  return response;
};
