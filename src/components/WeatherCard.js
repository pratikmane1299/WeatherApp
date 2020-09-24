import React from "react";

import Tooltip from './Tooltip';

function WeatherCard({ weather }) {
  return (
    <div className="weather-card">
      <h4>{weather.applicable_date}</h4>
      <Tooltip content={weather.weather_state_name} direction="bottom">
        <img
          src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`}
          alt={weather.weather_state_name}
        />
      </Tooltip>
      <p>
        <span>Humidity:</span> <span>{weather.humidity}°C</span>
      </p>
      <p>
        <span>Min:</span> <span>{weather.min_temp.toFixed(2)}°C</span>
      </p>
      <p>
        <span>Max:</span> <span>{weather.max_temp.toFixed(2)}°C</span>
      </p>
    </div>
  );
}

export default WeatherCard;
