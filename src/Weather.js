import React from "react";

import "./Weather.css";
import Temp from "./Temp";

export default function Weather() {
  return (
    <div className="Weather">
      <main>
        <div className="current-weather">
          <div>
            <h1>Paris</h1>
            <p>
              <span id="current-date">Saturday 15:32</span>, moderate rain
              <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>
          <Temp />
        </div>
      </main>
    </div>
  );
}
