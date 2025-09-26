import React from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
  

const UserProfile = () => {
    const navigate = useNavigate();
    const  { UserId} = useParams();
  return (
    <div>
      <h1>User Profile Page</h1>
      <p>User ID: {UserId}</p>
      <button onClick={() => navigate("/")}>Home</button>
    </div>
  )
}

export default UserProfile
