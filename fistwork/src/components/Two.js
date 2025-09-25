import React, { useEffect } from 'react'


const Two = () => {
   useEffect(() => {
      console.log("MOUNT TWO");
      return () => {
        console.log("UNMOUNT TWO");
      }
    }, []);
  return (
    <div>
      two
    </div>
  )
}

export default Two
