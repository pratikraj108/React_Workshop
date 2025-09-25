import React, { useEffect } from 'react'

const One = () => {
  
  useEffect(() => {
    console.log("MOUNT ONE");
    console.log("hello git checkup")
    
  }, []);

  return (
    <div>
      one
    </div>
  )
}

export default One
