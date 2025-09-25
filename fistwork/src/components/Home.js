import React from "react";
import { Link } from "react-router-dom";

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

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/About">ABOUT</Link>
      <br />
      <Link to="/Contact">CONTACT</Link>
      
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>View Profile {user.id}</Link>
          </li>
        ))}

    </div>
  );
};

export default Home;
