

const TypeTodo = () => {
    return (
      <article className="type-todo-section d-flex flex-column justify-content-around  h-100">
        <h2>To do List</h2>
        <input type="text" placeholder="Type Your Title" />
        <textarea placeholder="Start Typing Here..."></textarea>
        <button className="btn todo-btn">Submit Todo</button>
      </article>
    );
}
 
export default TypeTodo;