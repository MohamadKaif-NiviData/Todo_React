import React from 'react'
import { useRef } from 'react'


export const AddTodos = ({handleTodo}) => {
    
    const todoNameElement = useRef()
        
   
   
    const handleClick = (event)=>{
        event.preventDefault()
       let todonames = todoNameElement.current.value;
        handleTodo(todonames)
        todoNameElement.current.value=''
        
        
        
    }
  return (
    <form onSubmit={handleClick}>
     
    <input type='text' style={{width:'300px'}} placeholder='Enter Todo here' ref={todoNameElement} />
    <button className='btn btn-primary mx-3'  style={{width:'100px'}} >
        Add
    </button>
    </form>
  )
}
