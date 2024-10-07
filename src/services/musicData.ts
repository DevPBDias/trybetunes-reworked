const url = 'https://itunes.apple.com/lookup?amgArtistId=468749,5723&entity=song&limit=5&sort=recent'

const getMusics = async (id: string | undefined) => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=album&limit=6`);
  const requestJson = await request.json();
  return requestJson.results;
};

export type IArtist = {
  artistId: number,
  artistName: string,
  collectionId: number,
  collectionName: string,
  collectionPrice: number,
  artworkUrl100: string,
  releaseDate: string,
  trackCount: number
}

const searchAlbumsAPI = async (artist: any) => {
  const artistNameURL = encodeURI(artist).replaceAll('%20', '+');

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
    }),
  );
  return response;
};

export { getMusics, searchAlbumsAPI }