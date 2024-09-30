import { useEffect, useState } from 'react'
import { UserContextProvider } from './contexts/userContext'
import {TodoItem,TodoForm} from "./components/index"

import './App.css'

function App() {

  const [todo,setTodo]= useState([])
  
function addTodo(todo){
setTodo((prev)=>[{...todo,id:Date.now()},...prev])
}

function removeTodo(id){
  setTodo((prev)=>prev.filter((data)=>data.id!==id))
}

function updateTodo(todo,id){
  setTodo((prev)=>prev.map((data)=>data.id===id?todo:data))
}

function toggleComplete(id){
  setTodo((prev)=>prev.map((data)=>data.id===id?{...data,completed:!data.completed}:data))
}

useEffect(()=>{
  const localData= JSON.parse(localStorage.getItem("todos"))
  if(localData && localData.length>0) setTodo(localData)
},[])

useEffect(()=>{
 (localStorage.setItem("todos",JSON.stringify(todo)))
},[todo])


  return (
    <UserContextProvider value={{addTodo,removeTodo,updateTodo,todo,toggleComplete}}>

<div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       { todo.map((data)=>(
                        <div key={data.id} className='w-full'>
                          <TodoItem todo={data}/>
                        </div>
                       ))}

                    </div>
                </div>
            </div>

    </UserContextProvider>
  )
}

export default App
