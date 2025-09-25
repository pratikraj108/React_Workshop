import React, { useEffect } from 'react'

const One = () => {
  
  useEffect(() => {
    console.log("MOUNT ONE");

  }, []);

  return (
    <div>
      one
    </div>
  )
}

export default One
