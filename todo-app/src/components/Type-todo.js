
import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const TypeTodo = ({ setTodoList, todoList }) => {
  const [newTodo,setNewTodo]=useState({title:"",text:"" ,id:0})

const addNewTodo= ()=>{
  if(newTodo.title){
    setNewTodo((e) => setTodoList([...todoList, newTodo]))
    setNewTodo({ title: "", text: "", id: 0 });
  }
  
}




  return (
    <article className="type-todo-section d-flex flex-column justify-content-around  h-100">
      <h2>To do List</h2>

      <input
      value={newTodo.title}
        type="text"
        placeholder="Type Your Title"
        onChange={(e) =>
          setNewTodo({ ...newTodo, title: e.target.value, id: uuidv4() })
        }
      />
      <textarea
      value={newTodo.text}
        placeholder="Start Typing Here..."
        onChange={(e) => setNewTodo({ ...newTodo, text: e.target.value })}
      ></textarea>
      <button
        className="btn todo-btn"
        onClick={addNewTodo}
      >
        Submit Todo
      </button>
    </article>
  );
};
 
export default TypeTodo;