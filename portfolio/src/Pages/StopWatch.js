import React, { useState, useRef } from "react";
import { Box, Button, Typography, Stack, Paper, List, ListItem } from "@mui/material";

const StopWatch = () => {
  const [time, setTime] = useState(0); // in ms
  const [running, setRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      const startTime = Date.now() - time;
      timerRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
  };

  const stop = () => {
    clearInterval(timerRef.current);
    setRunning(false);
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setRunning(false);
    setTime(0);
    setLaps([]);
  };

  const lap = () => {
    if (running) {
      setLaps(prev => [...prev, time]);
    }
  };

  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis = Math.floor((ms % 1000) / 10);
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2,"0")
    }:${String(seconds).padStart(2, "0")}.${String(millis).padStart(2, "0")}`;
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "monospace",
        background: "linear-gradient(to right, #ece9e6, #ffffff)",
        p: 4,
      }}
    >
      <Paper elevation={6} sx={{ p: 4, borderRadius: 3, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          Stopwatch
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "monospace",
            fontWeight: "bold",
            mb: 3,
            color: "#1976d2",
          }}
        >
          {formatTime(time)}
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 3, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            color="success"
            onClick={start}
            disabled={running}
            sx={{ minWidth: 100, "&:hover": { transform: "scale(1.1)" }, transition: "0.3s" }}
          >
            Start
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={stop}
            disabled={!running}
            sx={{ minWidth: 100, "&:hover": { transform: "scale(1.1)" }, transition: "0.3s" }}
          >
            Stop
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={reset}
            sx={{ minWidth: 100, "&:hover": { transform: "scale(1.1)" }, transition: "0.3s" }}
          >
            Reset
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={lap}
            disabled={!running}
            sx={{ minWidth: 100, "&:hover": { transform: "scale(1.1)" }, transition: "0.3s" }}
          >
            Lap
          </Button>
        </Stack>

        <Typography variant="h5" sx={{ mb: 1, fontWeight: "bold" }}>
          Laps
        </Typography>
        {laps.length === 0 ? (
          <Typography color="text.secondary">No laps yet...</Typography>
        ) : (
          <List>
            {laps.map((lapTime, index) => (
              <ListItem key={index} sx={{ justifyContent: "center", p: 0.5 }}>
                {formatTime(lapTime)}
              </ListItem>
            ))}
          </List>
        )}
      </Paper>
    </Box>
  );
};

export default StopWatch;
