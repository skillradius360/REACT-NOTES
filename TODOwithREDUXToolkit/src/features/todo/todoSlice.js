import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos:[]
}

export const todoSlice=  createSlice(
    {
        name:"todo",
        initialState,
        reducers:{
            addTodo: (state,action)=>{
                const todo = {

                    id:nanoid(),
                    text:action.payload
                }
                state.todos.push(todo)
            },

            removeTodo : (state,action)=>{
                state.todos= state.todos.filter(
                    (data)=>data.id!==action.payload)
            },

            updateTodo : (state,action)=>{
                state.todos = state.todos.map((data)=>
                    data.id==action.payload.id?{...data,text:action.payload.text}:data
                )  
            }

        }
    }
)

export const {addTodo,removeTodo,updateTodo}= todoSlice.actions

export default todoSlice.reducer