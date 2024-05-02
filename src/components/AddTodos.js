import React, { useContext } from 'react'
import { useRef } from 'react'
import { itemData } from '../store/itemData'


export const AddTodos = () => {
    const { handleAddTodo } = useContext(itemData)
    const todoNameElement = useRef()
        
   
   
    const handleClick = (event)=>{
        event.preventDefault()
       let todonames = todoNameElement.current.value;
      handleAddTodo(todonames)
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
