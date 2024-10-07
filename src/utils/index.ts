const chooseRandomId = () => {
    const artistsId = ['Michael', 'Elton', 'Beyonce', "Gorillaz", "LINKIN PARK"]
    
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(5);
    const randomNumber = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
    const index = randomNumber;

    return artistsId[index]
}

export {chooseRandomId}