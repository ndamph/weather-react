import React, { useState } from "react";
import axios from "axios";

import DateStamp from "./DateStamp";
import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    setWeather({
      ready: true,
      city: response.data.city,
      temp: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.time * 1000),
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <main>
          <div className="current-weather d-flex justify-content-between">
            <div className="weatherConditions">
              <h1>{weather.city}</h1>
              <p>
                <div className="d-flex flex-row text-capitalize">
                  <div>
                    <DateStamp date={weather.date} />
                  </div>
                  <div>, {weather.description}</div>
                </div>
                <div>
                  Humidity: <strong>{weather.humidity}%</strong>, Wind:{" "}
                  <strong>{weather.wind}km/h</strong>
                </div>
              </p>
            </div>
            <div className="currentTemp d-flex">
              ☀️ <span className="tempDigits">{weather.temp}</span>
              <span className="currentUnit">°C</span>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    let apiKey = `73fd7aeeb1fc6do18b8423c70f3b718t`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(url).then(handleResponse);

    return "Loading weather..";
  }
}
