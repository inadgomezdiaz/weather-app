import "../hojas-de-estilo/Weather.css";
import React from "react";

export function Weather({ weather }) {
  return (
    <div className="container d-flex flex-column flex-wrap align-items-center justify-content-center m-3">
      <p className="fs-1 fw-bolder">{weather.main.temp} °c </p>
      <p className="fs-3 fw-bold">{weather.weather[0].description} </p>
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="icon" />
    </div >
  );
}