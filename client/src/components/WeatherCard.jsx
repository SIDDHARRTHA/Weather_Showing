import React from 'react';
import './WeatherCard.css';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="weather-card">
      <h2 className="city-name">{data.city}</h2>

      <div className="weather-main">
        <img
          className="weather-icon"
          src={data.icon}
          alt={data.condition}
        />
        <p className="condition">{data.condition}</p>
      </div>

      <div className="weather-details">
        <p>🌡️ {data.temperature}°C</p>
        <p>💧 {data.humidity}% Humidity</p>
        <p>💨 {data.windSpeed} m/s Wind</p>
      </div>
    </div>
  );
};

export default WeatherCard;
