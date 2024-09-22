import { useState } from 'react'
import './App.css'

function App() {

  let [count, setCount] = useState("#111155")

  
  const change=()=>{
    let mainColor=`#${Math.floor(Math.random() *9999999).toString(16).padStart(6, '0')}`;
    console.log(mainColor)
    setCount(mainColor)
    document.documentElement.style.background=mainColor
}

  return (
    <>
  <button onClick={change}>{count}</button>
    </>
  )
}

export default App
