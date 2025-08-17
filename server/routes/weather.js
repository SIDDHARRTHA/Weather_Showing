const express = require('express');
const axios = require('axios');
const router = express.Router();

const API_KEY = process.env.OPENWEATHER_API_KEY;

router.get('/', async (req, res) => {
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: 'City is required' });

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log("Calling API:", url); // Log the full request

    const response = await axios.get(url);
    const data = response.data;

    const result = {
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].main,
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };

    res.json(result);
  } catch (error) {
    console.error("Error from OpenWeather:", error.response?.data || error.message);
    res.status(404).json({ error: 'City not found or API error' });
  }
});

module.exports = router;
