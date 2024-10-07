const chooseRandomId: () => string = () => {
    const artistsId = ['Michael', 'Elton', 'Beyonce', "Gorillaz", "LINKIN PARK"]

    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(5);
    const randomIndex = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);

    return artistsId[randomIndex]
}

const getTodayDate: () => string = () => {
    const today = new Date();

    const year = today.getFullYear();

    let month: string | number = today.getMonth() + 1;
    if (month < 10) month = '0' + month;
    
    let day: string | number = today.getDate();
    if (day < 10) day = '0' + day;

    const formattedToday = day + '/' + month + '/' + year;

    return formattedToday
}

export {chooseRandomId, getTodayDate}