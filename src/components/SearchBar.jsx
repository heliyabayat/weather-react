import React from "react";
import "./SearchBar.css";
import axios from "axios";
import { useState } from "react";
import SearchData from "./SearchData";
export default function SearchBar() {
  const [cityInput, setCityInput] = useState("");
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const fetchCityData = async (url) => {
    const response = await axios
      .get(url)
      .then(function (response) {
        setCity(response.data);
      })
      .catch(function (error) {
        setError(error.message);
      })
      .finally(function () {
        console.log("successful get request");
      });
  };
  const onChangeHandler = (event) => {
    setCityInput(event.target.value);
  };

  const [cityList, setCityList] = useState([]);
  const onCityClickHandler = (item) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=f8e6a9e3d6fde87cb38868da460b1371`;
    fetchCityData(url);
  };
  const onCloseClickHandler = (item) => {
    let test = cityList.filter((city) => {
      return city !== item;
    });
    setCityList(test);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=f8e6a9e3d6fde87cb38868da460b1371`;
    fetchCityData(url);
  };

  const onAddCity = (city) => {
    const updatedCityList = [city, ...cityList];
    setCityList(updatedCityList);
  };

  return (
    <div className="d-flex flex-column gap-3">
      {error && <div class="alert alert-danger">{error}</div>}
      <form className="d-flex search-bar" onSubmit={onSubmitHandler}>
        <input
          type="text"
          className="form-control search-bar__input"
          onChange={onChangeHandler}
          value={cityInput}
        />
        <button
          type="submit"
          className="btn btn-primary search-bar__btn"
          disabled={!cityInput}
        >
          Search
        </button>
      </form>
      {city ? (
        <SearchData city={city} onAddCity={onAddCity} />
      ) : (
        <div className="alert alert-info">No data!</div>
      )}
      <h3>favorite cities</h3>
      {cityList.length > 0 ? (
        <div className="d-flex align-items-center justify-content-center gap-3">
          {cityList.map((item) => (
            <div key={item} className="position-relative">
              <span
                onClick={() => onCityClickHandler(item)}
                className="btn btn-light pe-5"
              >
                {item}
              </span>
              <span
                className="position-absolute top-50 end-0 translate-middle-y btn btn-sm btn-outline-danger"
                onClick={() => onCloseClickHandler(item)}
              >
                X
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="alert alert-info">
          you have not any favorite cities yet
        </div>
      )}
    </div>
  );
}
