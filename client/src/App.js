import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchWeather = async (city) => {
    if (!city) return;
    setLoading(true);
    setError('');
    setWeatherData(null);

    try {
      const response = await axios.get(`http://localhost:5000/weather?city=${city}`);
      setWeatherData(response.data);
    } catch (err) {
      setError('⚠️ City not found or network error');
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => setDarkMode((prev) => !prev);

  return (
    <div className={`app-container${darkMode ? ' dark' : ''}`}>
      {/* Use header-bar flex container */}
      <header className="header-bar">
        <h1 className="app-title">🌤️ Weather Dashboard</h1>
        <button className="dark-mode-toggle" onClick={handleToggle}>
          {darkMode ? '🌙 Dark Mode On' : '☀️ Light Mode On'}
        </button>
      </header>

      <main>
        <SearchBar onSearch={fetchWeather} />

        {loading && <p className="status-message">Loading weather data...</p>}
        {error && <p className="status-message error">{error}</p>}

        {weatherData && <WeatherCard data={weatherData} />}
      </main>
    </div>
  );
}

export default App;
