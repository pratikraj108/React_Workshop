import React, { useEffect, useState } from "react";

function App() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      const res = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=Jaipur&appid=863e0fa49885a59eafa24cec46b01491&units=metric"
      );
      const data = await res.json();
      console.log(data);
      setWeather(data);
    };

    getWeather();
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {weather && (
        <div>
          <p>City: {weather.name}</p>
          <p>Temperature: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}
export default App;