import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Stack, Paper } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #ece9e6, #ffffff)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: "40px",
          borderRadius: "16px",
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        {/* Name */}
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          PRATIK RAJ
        </Typography>

        {/* Information */}
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          I'm Pursuing B.Tech in Information Technology at SKIT Jaipur.
          <br />
          I’m a Beginner React Developer who loves building interactive web apps.
        </Typography>

        {/* Buttons */}
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/about")}
          >
            About Me
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={() => navigate("/todo")}
          >
            ToDo
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={() => navigate("/movie")}
          >
            Movie
          </Button>

          <Button
            variant="contained"
            color="warning"
            onClick={() => navigate("/weather")}
          >
            Weather
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={() => navigate("/stopwatch")}
          >
            StopWatch
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Home;
