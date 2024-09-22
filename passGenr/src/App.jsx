import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  let [specials, setSpecials] = useState(false)
  let [numbers, setNumbers] = useState(false)
  let [password, setPassword] = useState("")
  let [length, setLength] = useState(5)

  let result = ""
  let charStream = "abcdefghijklmnopqrstuvwxyz"

  const refferer= useRef(null)

  let passGenerator = useCallback(() => {
      if (specials) charStream += "!@#$%^&*',.?/"
      
      if (numbers) charStream += "0123456789"
        
        for (let index = 0; index <= length; index++) {
          let indexes= Math.floor(Math.random() *charStream.length)
          result+=charStream[indexes]
        }
     setPassword(result)
     console.log(result)
    }, [specials, numbers, length, setPassword]

  )

  useEffect(() => {
    passGenerator()
  },
    [specials, numbers, length,setPassword]
  )

  const cpyToClip= useCallback(()=>{
    refferer.current.select()
    refferer.current.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(password)
  },[password]
)

  return (
    <>
     
      <div 
      className=" max-w-[500px]  p-3 box-border flex-col  items-center gap-2 border-blue-500 border-2 rounded-md">

        <div 
        className="data w-[100%] flex  gap-3">

          <input type="text"  value={password}  readOnly 
          className="content w-[80%] h-[5vh] mb-10 rounded-md border-blue-500 border-2 text-black text-2xl" 
          ref={refferer}/>

          <button 
          className="copyBtn rounded-md border-blue-500 border-2 min-w-[100px] h-[5vh] bg-blue-500 text-white font-bold hover:delay-75,bg-blue-300"
           onClick={cpyToClip}
          >COPY</button>

        </div>

        <div className="utils flex-wrap w-[100%] flex justify-between items-center gap-2 text-white" >

          <input type="range" min="8" max="25" value={length} 
          className='w-[40%]' name='rnge'onChange={(e) => { setLength(e.target.value) }} />

          <label htmlFor="rnge">length: {length}</label>
          <input type="checkbox" 
          className='mx-2' defaultChecked={specials} onChange={()=>{setSpecials((pre)=>!pre)}} name="specials" />
          
          <label htmlFor="specials">special</label>
          <input type="checkbox"  defaultChecked={numbers} onChange={()=>{setNumbers((pre)=>!pre)}} name="number" />
          <label htmlFor="bumber">numbers</label>
        </div>

      </div>

    </>
  )
}

export default App
