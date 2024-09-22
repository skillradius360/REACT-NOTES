import React, { useState,useContext } from 'react'
import userContext from '../context/userContext'

function Login() {
  let [username,setUsername]= useState("")
  let [password,setPassword] = useState("")

  const {setData}= useContext(userContext)

  function submitData(e){
    e.preventDefault()
    console.log(username,password)
    setData({username,password})
  }

  return (
    <div>
        <h2></h2>
        <input type="text" 
        onChange={(e)=>setUsername(e.target.value)} value={username} placeholder='username'/>
        <input type="text" 
        onChange={(e)=>setPassword(e.target.value)} value={password} placeholder='password'/>
        <button type="submit" onClick={submitData}>SUBMIT</button>
    </div>
  )
}

export default Login