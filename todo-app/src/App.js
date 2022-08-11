import React from "react";
import { ReactDOM } from "react";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import TypeTodo from "./components/Type-todo";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <article className="bg-todo-main">
      <section className="container">
        <section className="todo-main row align-items-center">
          <section className="col-md-6 h-100">
            <TypeTodo />
          </section>
          <section className="col-md-6 h-100">
            <Todo />
          </section>
        </section>
      </section>
    </article>
  );
}
 
export default App;