import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="weekday">Fri</div>
          <WeatherIcon code={"clear-sky-day"} size={48} />
          <span className="maxTemp">21</span>
          <span className="minTemp">19</span>
        </div>
      </div>
    </div>
  );
}
