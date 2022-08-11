import React from "react";
import { ReactDOM } from "react";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import TypeTodo from "./components/Type-todo";
import Todo from "./components/Todo";

const App = () => {
  return (  
<React.StrictMode>
<TypeTodo/>
<Todo/>
</React.StrictMode>

  );
}
 
export default App;