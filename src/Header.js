import React, { useState } from "react";
import axios from "axios";

import Weather from "./Weather";
import "./Header.css";

export default function Header(props) {
  const [city, setCity] = useState(props.defaultCity);
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
      date: new Date(response.data.time * 1000),
      icon: response.data.condition.icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = `73fd7aeeb1fc6do18b8423c70f3b718t`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
  }

  if (weather.ready) {
    return (
      <div className="Header">
        <header>
          <form className="rounded-pill" onSubmit={handleSubmit}>
            <input
              type="search"
              className="searchBar"
              placeholder="Enter a city.."
              autoFocus
              required
              onChange={handleChange}
            />
            <input type="submit" className="searchButton" value="Search" />
          </form>
          <Weather
            city={weather.city}
            temp={weather.temp}
            description={weather.description}
            humidity={weather.humidity}
            wind={weather.wind}
            date={weather.date}
            icon={weather.icon}
          />
        </header>
      </div>
    );
  } else {
    search();
    return "Loading weather..";
  }
}
