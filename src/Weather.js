import React from "react";

import DateStamp from "./DateStamp";
import WeatherIcon from "./WeatherIcon";
import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <main>
        <div className="current-weather d-flex justify-content-between">
          <div className="weatherConditions">
            <h1>{props.city}</h1>
            <div className="d-flex flex-row text-capitalize">
              <div>
                <DateStamp date={props.date} />
              </div>
              <div>, {props.description}</div>
            </div>
            <div>
              Humidity: <strong>{props.humidity}%</strong>, Wind:{" "}
              <strong>{props.wind}km/h</strong>
            </div>
          </div>
          <div className="currentTemp d-flex">
            <WeatherIcon code={props.icon} />
            <span className="tempDigits">{props.temp}</span>
            <span className="currentUnit">°C</span>
          </div>
        </div>
      </main>
    </div>
  );
}
