// import React, { useEffect, useState } from "react";
// import CounterText from "./CounterText";
// import One from "./components/One";
// import Two from "./components/Two";
// import Three from "./components/Three";
// import Weather from "./components/weather";
// import Movie from "./components/movie";
// import MuiStyle from "./componentForMUI/MuiStyle";

// const App = () => {          // function componennt
//   const [counter, setCounter] = useState(0);
//   const [currentShow, setCurrentShow] = useState(1);

//   useEffect(() => {

//   }, []);

//   const minusClick = () => {
//     setCounter((prev)=> prev-1);
//     //setCounter(counter-1)
//   };

//   const plusClick =()=>{
//     setCounter ((prev)=> prev+1)
//   }
//   const showOne = () => {
//     setCurrentShow(1)
//   }
//   const showTwo = () => {
//     setCurrentShow(2);
//   }
//   const showThree = () => {
//     setCurrentShow(3);
//   }

//   return (
//     <>
//       {/* <CounterText counter={counter}/>
//       <CounterText counter={counter}/>
//       <CounterText counter={counter}/>
//       <button onClick={minusClick}>MINUS</button>
//       <button onClick={plusClick}>PLUS</button>  */}
//       {/* <button onClick={showOne}>SHOW ONE</button>
//       <button onClick={showTwo}>SHOW TWO</button>
//       <button onClick={showThree}>SHOW THREE</button> */}
//       {/* {}
//       {currentShow === 1 && <One />}
//       {currentShow === 2 && <Two />}
//       {currentShow === 3 && <Three />} */}
//       {/* <One />
//       <Two />
//       <Three />
//       <Weather />
//       <Movie /> */}

//     </>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import UserProfile from "./components/UserProfile";
const App = () => {
  return (
    //  <MuiStyle />
    <Router>
      <div className="APP">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />

          <Route path="/user/:UserId" element={<UserProfile />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
