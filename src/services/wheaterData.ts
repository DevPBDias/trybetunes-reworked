const BASE_URL_API = "https://api.openweathermap.org/data/2.5/weather?";
const WEATHER_API_KEY = "1683b93a9d2d4c23e105893e2998d2f5";

async function getPMWData() {
  const response = await fetch(
    `${BASE_URL_API}lat=-10.1906&lon=-48.3520&exclude=hourly,daily&appid=${WEATHER_API_KEY}&units=metric`
  );

  const requestJson = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return requestJson;
}

export default getPMWData;