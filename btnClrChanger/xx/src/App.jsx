import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setCount] = useState("pink")

  function one(){
    setCount("blue")
    
    console.log(color)
  }
  
  function two(){
    setCount("green")
    console.log(color)

  }
  function three(){
    setCount("red")
    console.log(color)

  }
  return (
    <>
    <div className="h-[100vh] w-[100vw] flex justify-center pt-5 gap-x-3" style={{background:color}}>
     <button onClick={one}
      className=" h-10 w-20 rounded-md   border-red-500 border-2 border-solid  hover:border-cyan-200">Blue</button>

     <button onClick={two} 
     className="two h-10 w-20 rounded-md  border-red-500 border-2 border-solid hover:border-cyan-200">Green</button>

     <button onClick={three} 
     className="three h-10 w-20 rounded-md border-red-500 border-2 border-solid hover:border-cyan-200">Red</button> 
     
     </div>
    </>
  )
}

export default App
