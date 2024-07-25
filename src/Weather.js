import React from "react";

export default function Weather() {
  return (
    <div className="Weather">
      <main>
        <div className="current-weather d-flex">
          <div>
            <h1>Paris</h1>
            <p>
              <span id="current-date">Saturday 15:32</span>, moderate rain
              <br />
              Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
            </p>
          </div>
          <div className="currentTemp">
            ☀️ <span>14</span>°C
          </div>
        </div>
      </main>
    </div>
  );
}
