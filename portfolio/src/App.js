import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Movie from './Pages/Movie';
import StopWatch from './Pages/StopWatch';
import ToDo from './Pages/ToDo';
import Weather from './Pages/Weather';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
