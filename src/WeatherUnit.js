import React, { useState } from "react";

import "./WeatherUnit.css";

export default function WeatherUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFahrenheit(event) {
    event.preventDefault();
    setUnit(`fahrenheit`);
  }

  function convertCelsius(event) {
    event.preventDefault();
    setUnit(`celsius`);
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherUnit">
        <span className="tempDigits">{Math.round(props.temp)}</span>
        <span className="currentUnit">
          °C|
          <a href="/" onClick={convertFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = Math.round((props.temp * 9) / 5 + 32);
    return (
      <div className="WeatherUnit">
        <span className="tempDigits">{fahrenheit}</span>
        <span className="currentUnit">
          <a href="/" onClick={convertCelsius}>
            ºC{" "}
          </a>
          | ºF
        </span>
      </div>
    );
  }
}
