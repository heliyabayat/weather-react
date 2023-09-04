import React from "react";

import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import CityData from "./CityData";
export default function SearchData({
  city,
  onAddCity,
  onChangeTemp,
  temp,
  unit,
  isInList,
}) {
  const onClickHandler = () => {
    onChangeTemp();
  };

  const onAddClickHandler = (city) => {
    onAddCity(city);
  };

  return (
    <ul className="list-group min-w-300">
      <CityData
        cityName={city.name}
        description={city.weather[0].description}
        icon={city.weather[0].icon}
        temp={temp}
        unit={unit}
        isInList={isInList}
        onTempClick={onClickHandler}
        onBookmarkClick={onAddClickHandler}
      />
      <WeatherDetails
        windSpeed={city.wind.speed}
        humidity={city.main.humidity}
      />
      <Forecast />
    </ul>
  );
}
