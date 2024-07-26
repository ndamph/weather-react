import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [temp, setTemp] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleResponse(response) {
    console.log(response);
    setTemp(Math.round(response.data.temperature.current));
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="Weather">
        <main>
          <div className="current-weather d-flex justify-content-between">
            <div>
              <h1>Paris</h1>
              <p>
                <span>Saturday 15:32</span>, moderate rain
                <br />
                Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
              </p>
            </div>
            <div className="currentTemp d-flex">
              ☀️ <span className="tempDigits">{temp}</span>
              <span className="currentUnit">°C</span>
            </div>
          </div>
        </main>
      </div>
    );
  } else {
    let city = "Winnipeg";
    let apiKey = `73fd7aeeb1fc6do18b8423c70f3b718t`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(handleResponse);

    return "Loading..";
  }
}
