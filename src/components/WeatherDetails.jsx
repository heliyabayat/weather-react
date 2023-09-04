import React from "react";
import { useState } from "react";

export default function WeatherDetails({ windSpeed, humidity }) {
  const [currentTime] = useState(new Date().toLocaleString("en-US"));
  return (
    <li className="list-group-item d-flex align-items-center justify-content-between gap-3">
      <span>{currentTime}</span>
      <div className="d-flex flex-column align-items-start">
        <span>
          wind: <strong>{windSpeed} </strong>
          km/h
        </span>
        <span>
          humidity: <strong>{humidity}</strong>%
        </span>
      </div>
    </li>
  );
}
