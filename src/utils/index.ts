const getTodayDate: () => string = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month: string | number = today.getMonth() + 1;
  let day: string | number = today.getDate();

  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;

  const formattedToday = day + "/" + month + "/" + year;
  return formattedToday;
};

const getYearReleased: (date: string) => number = (date) => {
  const dateReleased = new Date(date);
  const year = dateReleased.getFullYear();
  return year;
};

export { getTodayDate, getYearReleased };
