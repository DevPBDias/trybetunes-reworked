import { useEffect, useState } from "react";
import { getTodayDate } from "@/utils";
import getPMWData from "@/services/wheaterData";

const useWeatherDate = () => {
  const [weatherData, setWheaterData] = useState<any>();
  const [date, setDate] = useState<string>();

  useEffect(() => {
    const savingDateAndWheater = async () => {
      setWheaterData(await getPMWData());
      setDate(getTodayDate());
    };
    savingDateAndWheater();
  }, []);

  return [weatherData, date];
};

export default useWeatherDate;
