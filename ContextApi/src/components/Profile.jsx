import React,{useContext} from 'react'
import userContext from '../context/userContext'

function Profile() {

    const {data}= useContext(userContext)
    
    if(!data) return <p>Please login</p>
    
    
  return (
    <div>hello {data.username}</div>
  )
}

export default Profile