import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  CircularProgress,
  Stack,
} from "@mui/material";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError("");
    setWeather(null);

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=863e0fa49885a59eafa24cec46b01491&units=metric`
      );
      const data = await res.json();

      if (data.cod !== 200) {
        setError(data.message);
      } else {
        setWeather(data);
      }
    } catch (err) {
      setError("Error fetching weather");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        background: "linear-gradient(to right, #e0f7fa, #ffffff)",
        p: 4,
      }}
    >
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 4 }}>
        Weather App
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
        <TextField
          label="Enter city"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={fetchWeather}>
          Search
        </Button>
      </Stack>

      {loading && <CircularProgress />}

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {weather && (
        <Card sx={{ minWidth: 300, maxWidth: 400, p: 3, textAlign: "center", boxShadow: 6 }}>
          <CardContent>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {weather.name}
            </Typography>
            <Typography variant="h6">Temperature: {weather.main.temp}°C</Typography>
            <Typography variant="body1" color="text.secondary">
              {weather.weather[0].description}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Humidity: {weather.main.humidity}% | Wind: {weather.wind.speed} m/s
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Weather;
