import React from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const users = [
    { id: 1, name: "Raj", age: 22, email: "pratikkr14@gmail.com" },
    {
      id: 2,
      name: "John",
      age: 30,
      email: "john@example.com",
    },
  ];

  const navigate = useNavigate(); 

  return (
    <div>
      <h1>Home Page</h1>
      {/* <Link to="/About">ABOUT</Link> */}
      <button onClick={() => navigate("/About")}>ABOUT</button>

      {/* <Link to="/Contact">CONTACT</Link> */}
      <button onClick={() => navigate("/Contact")}>CONTACT</button>
      
        {users.map((user) => (
          <li key={user.id}>
            {/* <Link to={`/user/${user.id}`}>View Profile {user.id}</Link> */}
            <button onClick={() => navigate(`/user/${user.id}`)}>View Profile {user.id}</button>
          </li>
        ))}

    </div>
  );
};

export default Home;
