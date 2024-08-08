import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./ForecastDay.css";

export default function ForecastDay(props) {
  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let weekday = new Date(props.data.time * 1000).getDay();
  let roundedMax = Math.round(props.data.temperature.maximum);
  let roundedMin = Math.round(props.data.temperature.minimum);

  return (
    <div className="ForecastDay">
      <div className="weekday">{weekdays[weekday]}</div>
      <WeatherIcon code={props.data.condition.icon} size={48} />
      <span className="maxTemp">{roundedMax}º</span>
      <span className="minTemp">{roundedMin}º</span>
    </div>
  );
}
