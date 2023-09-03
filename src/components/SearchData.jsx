import React from "react";
import { useState } from "react";
export default function SearchData({ city, onAddCity }) {
  const [currentTime] = useState(new Date().toLocaleString("en-US"));
  const [currentUnit, setCurrentUnit] = useState("°C");
  const [currentTemp, setCurrentTemp] = useState(
    Math.round(city.main.temp - 273)
  );
  const onClickHandler = () => {
    if (currentUnit === "°C") {
      setCurrentTemp(Math.round(currentTemp * 1.8 + 32));
      setCurrentUnit("°F");
    }
    if (currentUnit === "°F") {
      setCurrentTemp(Math.round((currentTemp - 32) / 1.8));
      setCurrentUnit("°C");
    }
  };
  const onAddClickHandler = (city) => {
    onAddCity(city);
  };

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex align-items-center gap-3 justify-content-between">
        <div className="d-flex flex-column align-items-start">
          <h1 className="mb-0">
            {city.name}{" "}
            <span
              className="badge bg-dark"
              onClick={() => onAddClickHandler(city.name)}
            >
              add to favorites
            </span>
          </h1>
          <p className="lead m-0">{city.weather[0].description}</p>
        </div>
        <div className="d-flex align-items-center">
          <img
            src={`https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
            alt="icon"
          />
          <h2
            className="fs-1 mb-0"
            style={{ cursor: "pointer" }}
            onClick={onClickHandler}
          >
            <strong>{Math.round(city.main.temp - 273)}</strong>
            <sup>{currentUnit}</sup>
          </h2>
        </div>
      </li>
      <li className="list-group-item d-flex align-items-center justify-content-between gap-3">
        <span>{currentTime}</span>
        <div className="d-flex flex-column align-items-start">
          <span>
            wind: <strong>{city.wind.speed} </strong>
            km/h
          </span>
          <span>
            humidity: <strong>{city.main.humidity}</strong>%
          </span>
        </div>
      </li>
    </ul>
  );
}
