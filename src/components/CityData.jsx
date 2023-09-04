import React from "react";

export default function CityData({
  cityName,
  description,
  icon,
  temp,
  unit,
  isInList,
  onBookmarkClick,
  onTempClick,
}) {
  return (
    <li className="list-group-item d-flex align-items-center gap-3 justify-content-between">
      <div className="d-flex flex-column align-items-start">
        <div className="d-flex flex-column align-items-start gap-3">
          <p className="lead mb-0">
            <span className="fw-bold text-uppercase text-primary">
              {cityName}
            </span>
            {" - "}
            <span>{description}</span>
          </p>
          <span
            className="btn btn-sm btn-dark"
            onClick={() => onBookmarkClick(cityName)}
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
          src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <h2
          className="fs-1 mb-0"
          style={{ cursor: "pointer" }}
          onClick={onTempClick}
        >
          <strong>{temp}</strong>
          <sup>{unit}</sup>
        </h2>
      </div>
    </li>
  );
}
