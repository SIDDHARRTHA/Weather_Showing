# Weather Dashboard

A full-stack weather application that lets users search and view real-time weather information for any city worldwide.
Built with React (frontend) and Express.js (backend), powered by the OpenWeather API.

✨ Features

🔍 Search by city name

🌡️ Current weather details: temperature, humidity, wind speed, and conditions

📱 Responsive design for desktop & mobile

🎨 Modern UI/UX with clean cards and animations

⚡ Full-stack architecture (React + Express)

📂 Project Structure
weather_project/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # SearchBar, WeatherCard, etc.
│   │   ├── App.js       # Main React app
│   │   └── index.js     # Entry point
│   └── public/
│       └── index.html   # HTML template
│
├── server/              # Express backend
│   ├── routes/          # API routes
│   ├── server.js        # Server entry
│   └── .env             # API key config
│
├── screenshots/         # App screenshots
└── README.md            # Documentation

🚀 Getting Started
✅ Prerequisites

Node.js (v16+ recommended)

npm or yarn

⚙️ Setup

Clone the repository

git clone https://github.com/SIDDHARRTHA/Weather_Showing.git
Search Page:
![Search Weather](screenshots/search.png)

Weather Details Page:
![Weather Details](screenshots/details.png)

Add your screenshots as `search.png` and `details.png` in the `screenshots/` folder.
npm install

# Server
cd ../server
npm install


Configure API key
Add your OpenWeather API key to server/.env:

OPENWEATHER_API_KEY=your_api_key_here

▶️ Running the App

Start the backend (Express server):

cd server
node server.js


Start the frontend (React app):

cd client
npm start


Open http://localhost:3000 in your browser 🎉


📸 Screenshots

Weather Details Page:
![Weather Details](screenshots/details.png)

Add your screenshots as `search.png` and `details.png` in the `screenshots/` folder.

🛠️ Tech Stack

Frontend: React, CSS

Backend: Express.js, Node.js

API: OpenWeather

Styling: Modern CSS (responsive + animations)

🤝 Contributing

Contributions are welcome! Feel free to fork this repo, create a feature branch, and submit a PR.

📜 License

This project is licensed under the MIT License.
