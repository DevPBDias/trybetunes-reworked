import { Sun, Calendar } from "lucide-react";
import "./styles.scss";
import { getTodayDate } from "@/utils";
import getPMWData from "@/services/wheaterData";
import { useEffect, useState } from "react";

const DateAndWheater = () => {
  const [weatherData, setWheaterData] = useState<any>();
  const [date, setDate] = useState<any>();

  useEffect(() => {
    const savingDateAndWheater = async () => {
      setWheaterData(await getPMWData());
      setDate(getTodayDate());
    };
    savingDateAndWheater();
  }, []);

  return (
    <section className="container-info">
      <div className="container-date">
        <p>{date}</p>
        <Calendar size={24} color="#001400" />
      </div>
      <div className="container-wheater">
        <p>
          {weatherData
            ? `${Math.round(weatherData?.main?.temp)} °C`
            : "Carregando..."}
        </p>
        <Sun size={24} color="#001400" />
      </div>
    </section>
  );
};

export default DateAndWheater;
