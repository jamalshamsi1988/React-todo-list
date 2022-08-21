
import { useState } from 'react';

const TypeTodo = ({ setTodoList, todoList }) => {
  const [newTodo,setNewTodo]=useState({title:"",text:""})
  return (
    <article className="type-todo-section d-flex flex-column justify-content-around  h-100">
      <h2>To do List</h2>
      <input
        type="text"
        placeholder="Type Your Title"
        onChange={(e) => setNewTodo({...newTodo,title:e.target.value})}
      />
      <textarea
        placeholder="Start Typing Here..." onChange={(e)=> setNewTodo({...newTodo,text:e.target.value})}
      ></textarea>
      <button
        className="btn todo-btn"
        onClick={(e) =>setTodoList([...todoList,newTodo])}
      >
        Submit Todo
      </button>
    </article>
  );
};
 
export default TypeTodo;