import React, { useState, useRef } from "react";

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
      }, 10); // update every 10ms
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
      setLaps([...laps, time]);
    }
  };

  // convert ms -> hh:mm:ss:ms
  const formatTime = (ms) => {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const millis = Math.floor((ms % 1000) / 10);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}.${String(millis).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", fontFamily: "monospace" }}>
      <h1>⏱ Stopwatch</h1>
      <h2>{formatTime(time)}</h2>

      <div style={{ margin: "10px" }}>
        <button onClick={start} disabled={running}>
          Start
        </button>
        <button onClick={stop} disabled={!running}>
          Stop
        </button>
        <button onClick={reset}>Reset</button>
        <button onClick={lap} disabled={!running}>
          Lap
        </button>
      </div>

      <h3>Laps</h3>
      <ol>
        {laps.map((lapTime, index) => (
          <li key={index}>{formatTime(lapTime)}</li>
        ))}
      </ol>
    </div>
  );
};

export default StopWatch;
