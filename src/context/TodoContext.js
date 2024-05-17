import {createContext,useContext} from "react"

export const TodoContext=createContext({
    todos:[
        {
            //properties of the project
            id:1,
            todo:"todo msg",
            completed:false,
        }
    ],
    //functionality 
    addTodo:(todo)=>{},
    updatedTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider