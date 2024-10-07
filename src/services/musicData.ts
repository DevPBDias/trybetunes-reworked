
export const musicCoreApi = async (url: string) => {
    const baseUrl = 'https://genius-song-lyrics1.p.rapidapi.com/';
    const headers = {
      'X-rapidapi-Host': 'genius-song-lyrics1.p.rapidapi.com',
      'X-RapidAPI-Key': '1a0907c536msh398875db943bbdep12889cjsn97c830d10ae1',
    }

    const response = await fetch(`${baseUrl}${url}`, {headers})
    const data = await response.json();
    console.log(data);

    return data
  }
