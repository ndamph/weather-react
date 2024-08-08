import React from "react";

import "./WeatherUnit.css";

export default function WeatherUnit(props) {
  return (
    <div className="WeatherUnit">
      <div className="currentTemperature">
        <span className="tempDigits">{Math.round(props.temp)}</span>
        <span className="currentUnit align-top">°C</span>
      </div>
    </div>
  );
}
