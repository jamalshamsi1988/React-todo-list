import React, { useState } from "react";
import { ReactDOM } from "react";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import TypeTodo from "./components/Type-todo";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  // const [todoTitle,setTodoTitle]=useState("");
  // const [todoText, setTodoText] = useState("");
const [todoList, setTodoList] = useState([
  { title: "job1", text: "salam01" },
  { title: "job2", text: "salam02" },
  { title: "job3", text: "salam03" },
]);


  return (
    <article className="bg-todo-main">
      <section className="container">
        <section className="todo-main row align-items-center">
          <section className="col-md-6 h-100">
            <TypeTodo  /*setTodoTitle={setTodoTitle} setTodoText={setTodoText} */ />
          </section>
          <section className="col-md-6 h-100">
            {todoList.map(item=>(<Todo title={item.title} text={item.text}

            /*todoText={todoText} todoTitle={todoTitle} */
            />))}
            
          </section>
        </section>
      </section>
    </article>
  );
}
 
export default App;