import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import { AddTodos } from './components/AddTodos';
import { DisplayTodo } from './components/DisplayTodo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo,settodo] = useState([])
  

const handleAddTodo = (mytodo)=>{
settodo([...todo,{id:uuidv4(),text:mytodo,iscompleted:false}])

}
const handleDelete = (id)=>{
  let items = todo.filter(item=>item.id !== id)
  settodo(items)
}
const handleEdit = (id,newText)=>{
  const updatedTodo = todo.map((item) =>
  item.id === id ? { ...item, text: newText } : item
);
settodo(updatedTodo);
 

  
}
const onChangeCheck = (e,id)=>{
  let index = todo.findIndex(item=>item.id === id)

  let newtodo = [...todo]
  console.log(newtodo,'newtodo');
  newtodo[index].iscompleted = !newtodo[index].iscompleted
  
  settodo(newtodo)
  
}
  return (
    <div className='container m-auto' style={{textAlign:'center'}}>
      <h2>Todo Lists</h2>
      
    <AddTodos handleTodo={handleAddTodo} />
    <hr/>
   {todo.length === 0 && "Your Todo is Empty"}
    <DisplayTodo todo={todo} onDelete={handleDelete} onEdit={handleEdit} onChangeCheck={onChangeCheck} />
    </div>
  );
}

export default App;
