import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weather, setWeather] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeather({
      ready: true,
      city: response.data.city,
      temp: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <main>
          <div className="current-weather d-flex justify-content-between text-capitalize">
            <div className="weatherConditions">
              <h1>{weather.city}</h1>
              <p>
                <span>Saturday 15:32</span>, {weather.description}
                <br />
                Humidity: <strong>{weather.humidity}%</strong>, Wind:{" "}
                <strong>{weather.wind}km/h</strong>
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
