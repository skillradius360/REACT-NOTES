import React ,{useEffect, useState}from 'react'
import { useParams } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'


function Github() {

  const data= useLoaderData()
    // const [data,setData]= useState({})
    // const {username}= useParams()
    // useEffect(()=>{
    //     fetch(`https://api.github.com/users/${username}`)
    //     .then(res=>res.json())
    //     .then(res=>setData(res))
    //     console.log(data)
    // },[])

  return (
    <div>{data.login}
    <img src={data.avatar_url} alt="" />
    </div>

  )
}

export const  gitFetch= async function(){
  let f1= await fetch(`https://api.github.com/users/skillradius360`)
  return f1.json()
  
}
export default Github