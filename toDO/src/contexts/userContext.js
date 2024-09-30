import {createContext, useContext} from "react"

const userContext= createContext({
    todos:[
        {
            id:1,
            data:"hi",
            completed:false
        }
    ],

    addTodo:()=>{},
    updateTodo:(id,todo)=>{},
    removeTodo:(id)=>{},
    toggleComplete:(id)=>{}
    
})

export const UserContextProvider= userContext.Provider

export function useUser(){
    return useContext(userContext)
}

