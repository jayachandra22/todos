import React, { useState } from 'react';
import './App.css';
import {Button,Card,Form} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"

function Todo({todo,index,markTodo,removeTodo}){
  return(
   <div class="todo">
   <span style={{textDecoration:todo.isDone?"line-through":""}}>{todo.text}</span>
   <div>
   <Button variant='outline-success' onClick={()=>markTodo(index)}>Done</Button>
   <br />
   <Button variant='outline-danger' onClick={()=>removeTodo(index)}>Remove</Button>
   </div>
   </div> 
  );
}

function FormTodo({addTodo}){
  const[value,setvalue]=useState("");

  const handlesubmit=(e)=>{
    e.preventDefault();
    if(!value)return
    addTodo(value)
    setvalue("")
  }
  return(
    <Form onSubmit={handlesubmit}>
    <Form.Group>
    <Form.Label><b>Add Todo</b></Form.Label>
    <Form.Control type="text" className="input" value={value} onChange={e=>setvalue(e.target.value)} placeholder="Add new todos"/>
    <Button variant='primary mb-3' type='submit'>submit</Button>
    </Form.Group> 
    </Form>
  )
}
function App() {
  const[todos,setTodos]=useState([
    {
      text:"this is a sample todo",
      isDone:false
    }
  ]);

  const addTodo=text=>{
    const newTodos=[...todos,{text}]
    setTodos(newTodos)
  };

 const removetodo=index=>{
  const newTodos=[...todos]
  newTodos.splice(index,1)
  setTodos(newTodos)
 }

 const markTodo=index=>{
  const newTodos=[...todos];
  newTodos[index].isDone=true;
  setTodos(newTodos)

 }
  return (
    <div className="App">
    <div className='container'>
    <h1 className='tetx-center mb-4'>Todo List</h1>
       <FormTodo addTodo={addTodo} />
       <div>
       {todos.map((todo,index)=>(
        <Card>
        <Card.Body>
        <Todo
        key={index}
        index={index}
        todo={todo}
        markTodo={markTodo}
        removeTodo={removetodo}
        />
        </Card.Body>
        </Card>
  ))}
       </div>
    </div>
    </div>
  );
}

export default App;
