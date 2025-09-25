import React from 'react'
import { useParams } from 'react-router-dom';

const UserProfile = () => {

    const  { UserId} = useParams();
  return (
    <div>
      <h1>User Profile Page</h1>
      <p>User ID: {UserId}</p>
    </div>
  )
}

export default UserProfile
