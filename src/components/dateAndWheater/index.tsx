import { Sun, Calendar } from "lucide-react";
import "./styles.scss";

const DateAndWheater = () => {
  return (
    <section className="container-info">
      <div className="container-date">
        <p>1/10/2024</p>
        <Calendar size={24} color="#001400" />
      </div>
      <div className="container-wheater">
        <p>36°C Sol</p>
        <Sun size={24} color="#001400" />
      </div>
    </section>
  );
};

export default DateAndWheater;
