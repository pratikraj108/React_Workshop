import React from "react";
import { Container, Typography, Box, Paper } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 8, mb: 8 }}>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 3,
          textAlign: "center",
          background: "linear-gradient(to right, #f0f0f0, #ffffff)",
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom fontWeight="bold">
          About Me
        </Typography>

        <Typography variant="body1" sx={{ mt: 2, fontSize: "1.2rem", color: "text.secondary" }}>
          Hello! My name is <strong>Pratik Raj</strong>. I am currently pursuing 
          <strong> B.Tech in Information Technology</strong> at SKIT Jaipur. 
        </Typography>

        <Box sx={{ mt: 3 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            I am a Beginner React Developer and I enjoy building interactive web applications.
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            So far, I have worked on projects like a <strong>ToDo App</strong>, <strong>Movie App</strong>, <strong>Weather App</strong>, and a <strong>Stopwatch App</strong> to improve my skills.
          </Typography>
          <Typography variant="body1">
            I am passionate about learning new web technologies and improving my coding skills continuously.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default About;
