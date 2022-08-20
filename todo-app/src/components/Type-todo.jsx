

const TypeTodo = ({ }) => {
  return (
    <article className="type-todo-section d-flex flex-column justify-content-around  h-100">
      <h2>To do List</h2>
      <input type="text" placeholder="Type Your Title"   /*onChange={(e)=>setTodoTitle(e.target.value)} *//> 
      <textarea placeholder="Start Typing Here..." /*onChange={(e)=> setTodoText(e.target.value)}}*/></textarea>
      <button className="btn todo-btn">Submit Todo</button>
    </article>
  );
};
 
export default TypeTodo;