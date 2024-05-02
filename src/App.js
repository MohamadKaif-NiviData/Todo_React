import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { AddTodos } from './components/AddTodos';
import { DisplayTodo } from './components/DisplayTodo';
import { v4 as uuidv4 } from 'uuid';
import { itemData } from './store/itemData'
import { useReducer } from 'react';


const itemReducer = (itemstate,action)=>{
  let currentState = itemstate
  console.log('call');
  if(action.type === 'NEW_ITEM'){
    console.log('yes');
    currentState = [...itemstate,{id:uuidv4(),text:action.playload.mytodo,iscompleted:false}]
  }else if(action.type === 'DELETE_ITEM'){
    currentState = itemstate.filter(item=>item.id !== action.payload.id)
  }
return currentState
}
function App() {
  // const [todo,settodo] = useState([])
  const [todo,todoDispatch] = useReducer(itemReducer,[])


const handleAddTodo = (mytodo)=>{
const itemAdd = {
  type:"NEW_ITEM",
  playload:{
    mytodo
  }
}
todoDispatch(itemAdd)


}
const handleDelete = (id)=> {
  const deteteItem = {
    type:'DELETE_ITEM',
    payload:{
      id:id
    }
  }
  todoDispatch(deteteItem)
  
  // settodo(items)
}
const handleEdit = (id,newText)=>{
  const updatedTodo = todo.map((item) =>
  item.id === id ? { ...item, text: newText } : item
);
// settodo(updatedTodo);
 

  
}
const onChangeCheck = (e,id)=>{
  let index = todo.findIndex(item=>item.id === id)

  let newtodo = [...todo]
  console.log(newtodo,'newtodo');
  newtodo[index].iscompleted = !newtodo[index].iscompleted
  
  // settodo(newtodo)
  
}
  return (
    <itemData.Provider value={{todo,handleDelete,handleAddTodo,handleEdit,onChangeCheck}}>
    <div className='container m-auto' style={{textAlign:'center'}}>
      
      <h2>Todo Lists</h2>
      
    <AddTodos/>
    <hr/>
   {todo.length === 0 && "Your Todo is Empty"}
    <DisplayTodo/>
    </div>
    </itemData.Provider>
  );
}

export default App;
