import React from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
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
            ☀️ <span className="tempDigits">14</span>
            <span className="currentUnit">°C</span>
          </div>
        </div>
      </main>
    </div>
  );
}
