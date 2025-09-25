
import React ,{useEffect,useState} from 'react'

const CounterText = (props) => {

  console.log("probs------",props)
  return (
    <>
      <h1>This is my number{props.counter}</h1>
      
    </>
  )
}

export default CounterText
