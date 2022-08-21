import {FaTrash} from "react-icons/fa"
import { useState } from 'react';

const Todo = ({title , text ,setTodoList,todoList,id}) => {

  const handelDelet = () => {
    const filtered=todoList.filter(item => item.id !== id);
    setTodoList(filtered)
  }
  return (
    <article className="d-flex flex-cloumn justify-content-center py-5 ">
      <section className="todo-box ">
        <section className="todo-title d-flex justify-content-between px">
          <h3>{title}</h3>
          <button className="btn" onClick={handelDelet}>
            <FaTrash color="red" />
          </button>
        </section>
        <p className="p-2">
       {text}
        </p>
      </section>
    </article>
  );
};
 
export default Todo;