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

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [movieName, setMovieName] = useState("");
  const [error, setError] = useState("");

  const fetchMovie = async () => {
    if (!movieName) return;

    setLoading(true);
    setError("");
    setMovie(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${encodeURIComponent(
          movieName
        )}&apikey=205929cc`
      );
      const data = await response.json();

      if (data.Response === "False") {
        setError(data.Error);
      } else {
        setMovie(data);
      }
    } catch (err) {
      setError("Error fetching movie data");
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
        background: "linear-gradient(to right, #ffe0b2, #ffffff)",
        fontFamily: "Arial, sans-serif",
        p: 4,
      }}
    >
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 4 }}>
        Movie Info
      </Typography>

      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 4 }}>
        <TextField
          label="Enter movie name"
          variant="outlined"
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={fetchMovie}>
          Search
        </Button>
      </Stack>

      {loading && <CircularProgress />}

      {error && (
        <Typography color="error" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      {movie && (
        <Card
          sx={{
            minWidth: 300,
            maxWidth: 400,
            p: 3,
            textAlign: "center",
            boxShadow: 6,
            borderRadius: 3,
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: 12,
            },
          }}
        >
          <CardContent>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              {movie.Title}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Year: {movie.Year}
            </Typography>
            <Typography variant="h6" sx={{ mb: 1 }}>
              Genre: {movie.Genre}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Director: {movie.Director}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Actors: {movie.Actors}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
              Plot: {movie.Plot}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default Movie;
    