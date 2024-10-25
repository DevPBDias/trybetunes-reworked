import { Sun, Calendar } from "lucide-react";
import "./styles.scss";
import useWeatherDate from "@/hooks/useWeatherDate";

const DateAndWheater = () => {
  const [weatherData, date] = useWeatherDate();

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
