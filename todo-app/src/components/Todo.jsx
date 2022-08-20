import {FaTrash} from "react-icons/fa"
import { useState } from 'react';

const Todo = ({title , text}) => {


  return (
    <article className="d-flex flex-cloumn justify-content-center  ">
      <section className="todo-box ">
        <section className="todo-title d-flex justify-content-between">
          <h3>{title}</h3>
          <button className="btn">
            <FaTrash color="red" />
          </button>
        </section>
        <p>
       {text}
        </p>
      </section>
    </article>
  );
};
 
export default Todo;