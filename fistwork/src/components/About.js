import React from "react";
    // import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={() => navigate("/Contact")}>CONTACT</button>
      <br />
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  );
};

export default About;
