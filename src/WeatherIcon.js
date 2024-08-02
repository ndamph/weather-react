import React from "react";

import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const mapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "few-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "broken-clouds-day": "PARTLY_CLOUDY_DAY",
    "broken-clouds-night": "PARTLY_CLOUDY_NIGHT",
    "shower-rain-day": "RAIN",
    "shower-rain-night": "RAIN",
    "rain-day": "RAIN",
    "rain-night": "RAIN",
    "thunder-storm-day": "CLEAR_DAY",
    "thunder-storm-night": "CLEAR_NIGHT",
    "snow-day": "SNOW",
    "snow-day": "SNOW",
    "mist-night": "FOG",
    "mist-night": "FOG",
  };
  return (
    <div className="WeatherIcon">
      <ReactAnimatedWeather
        icon={mapping[props.code]}
        color="black"
        size={65}
        animate={true}
      />
    </div>
  );
}
