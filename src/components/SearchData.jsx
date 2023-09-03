import React from "react";
import { useState } from "react";
export default function SearchData({
  city,
  onAddCity,
  onChangeTemp,
  temp,
  unit,
  isInList,
}) {
  const [currentTime] = useState(new Date().toLocaleString("en-US"));

  const onClickHandler = () => {
    onChangeTemp();
  };

  const onAddClickHandler = (city) => {
    onAddCity(city);
  };

  return (
    <ul className="list-group">
      <li className="list-group-item d-flex align-items-center gap-3 justify-content-between">
        <div className="d-flex flex-column align-items-start">
          <div className="d-flex flex-column align-items-start gap-3">
            <p className="lead mb-0">
              <span className="fw-bold text-uppercase text-primary">
                {city.name}
              </span>
              {" - "}
              <span>{city.weather[0].description}</span>
            </p>
            <span
              className="btn btn-sm btn-dark"
              onClick={() => onAddClickHandler(city.name)}
            >
              {isInList ? (
                <>
                  <i className="bi bi-bookmark-dash"></i>
                  <span className="ms-1">Remove from Favorites</span>
                </>
              ) : (
                <>
                  <i className="bi bi-bookmark-plus"></i>
                  <span className="ms-1">Add to Favorites</span>
                </>
              )}
            </span>
          </div>
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
            <strong>{temp}</strong>
            <sup>{unit}</sup>
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
