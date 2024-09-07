import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const[counter,setCounter] = useState(15)


  // let counter = 5;

  const addValue =()=>{
    console.log("Clicked",counter);
    //In sab me value abhi bhi 1 baar increment karegi and not mulitple times
    // setCounter(counter+1) 
    // setCounter(counter+1) 
    // setCounter(counter+1) 
    // setCounter(counter+1) 

    //But if i want to increment the value in this manner

    //Ab value single click me will be incremented by 4 15+4=19
    //Callback function me dena padega e
    // setCounter(counter=>counter+1)
    // setCounter(counter=>counter+1)
    // setCounter(counter=>counter+1)
    // setCounter(counter=>counter+1)
  }

  const removeValue = ()=>{
    setCounter(counter-1);
  }

  return (
    <>
      <h1>React Course</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br/>

      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
