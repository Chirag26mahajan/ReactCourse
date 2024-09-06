import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    username:"Chirag",
    age:21
  }


  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Css</h1>
      <Card channel="coding" someObje={myObj}/>
    </>
  )
}

export default App
