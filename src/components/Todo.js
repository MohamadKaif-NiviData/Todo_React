import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
export const Todo = () => {
 
   const [todo,settodo] = useState("")
  const [alltodo,getalltodo] = useState
    const [finished,setFinished] = useState(false)
    useEffect(()=>{
    let get_data = JSON.parse(localStorage.getItem("alltodo"))
        if(get_data){
            getalltodo(get_data)
        }
},[])
    // const saveToLocal = ()=>{
    //     localStorage.setItem("alltodo",JSON.stringify(alltodo))

    // }
    let addTodo = ()=>{
        getalltodo([...alltodo ,{id:uuidv4(),text:todo,isCompleted:false}])
        settodo("")
        console.log(alltodo);
        // saveToLocal()
        
    }
    let handleTodo =(e)=>{
        settodo(e.target.value)
        
    }
    const handleCheck =(e)=>{
       let id = e.target.name;
        let get_obj = alltodo.findIndex(todo=>todo.id === id)
        
        let newtodo = [...alltodo]
        newtodo[get_obj].isCompleted = !newtodo[get_obj].isCompleted
        getalltodo(newtodo)
        
        // getalltodo([...alltodo,get_obj])
    }
    let handleDelete = (e,id)=>{
        
        let delete_conform = window.confirm("are you went to delete ?");
        if(delete_conform){

            let obj = alltodo.filter(item=>item.id !== id)
            getalltodo(obj)
            // saveToLocal()
        }
       
    }
    let handleEdit = (e,id)=>{
        console.log(id,'id');
        let get_index = alltodo.findIndex(item=>item.id === id)
        settodo(alltodo[get_index].text)
        let obj = alltodo.filter(item=>item.id !== id)
            getalltodo(obj)
            // saveToLocal()
  

    }
    const checkFinished = (e)=>{
        console.log('call');
        setFinished(e.target.checked)
        console.log(e.target.checked,'checking');
       if(e.target.checked){
        console.log(alltodo,'al');
            let data = alltodo.filter(item=>item.isCompleted)
            console.log(data,'ck data');
            let newtodo = [...data]
            getalltodo(newtodo)
            console.log(alltodo,'laset');
       }else{
        console.log(alltodo,'alltodo list');
        getalltodo(alltodo)

       }
    }
  return (
   <>
  <div>
    <div className='add-todo'>
    
    
    <button className='btn btn-primary mx-4' onClick={addTodo} >
        Add 
    </button>
    </div>
<hr/>
<input type='checkbox' checked={finished} style={{ marginRight: '8px' }} onChange={checkFinished}  />show Finished
<h2 className='d-flex justify-content-center'>Your Todo</h2>
{alltodo.map(item => {
  return  (
    <div className='todos py-2 d-flex justify-content-center' key={item.id}>
      <div className="d-flex align-items-center"> {/* Container for checkbox and todo */}
        <input type='checkbox' name={item.id} checked={item.isCompleted} onChange={handleCheck} style={{ marginRight: '8px' }} />
        <span className={item.isCompleted ? 'line-through' : ''}>{item.text}</span>
      </div>
      <span className='mx-3'>
        <button className='mx-1 btn btn-info' onClick={(e)=>handleEdit(e,item.id)}>Edit</button>
        <button className='mx-1 btn btn-danger' onClick={(e) => handleDelete(e, item.id)}>Delete</button>
      </span>
    </div>
  );
})}
   
  </div>
   </>
  )
}
