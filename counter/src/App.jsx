import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(10)

const addValue= ()=>{
  if(count<20){
  
  setCount((prev)=>prev+1)
  }
}
const remValue= ()=>{
  
  if(count>0){
    setCount(count-1)
    
  }
}


  return (
    <>
    <h2 >{count}</h2>
   <button onClick={addValue}className="border-red-500" >ADD</button>
   <button onClick={remValue}className="border-red-500">SUB</button>
    </>
    )
  
}

export default App
