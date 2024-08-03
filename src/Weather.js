import React from "react";

import DateStamp from "./DateStamp";
import WeatherIcon from "./WeatherIcon";
import WeatherUnit from "./WeatherUnit";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <main>
        <div className="current-weather d-flex justify-content-between">
          <div className="weatherConditions">
            <h1>{props.city}</h1>
            <div className="text-capitalize">
              <DateStamp date={props.date} description={props.description} />
            </div>
            <div>
              Humidity: <strong>{props.humidity}%</strong>, <br />
              Wind: <strong>{props.wind}km/h</strong>
            </div>
          </div>
          <div className="currentTemp d-flex">
            <WeatherIcon code={props.icon} />
            <WeatherUnit temp={props.temp} />
          </div>
        </div>
      </main>
    </div>
  );
}
