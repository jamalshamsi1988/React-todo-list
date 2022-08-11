import {FaTrash} from "react-icons/fa"
const Todo = () => {
    return (  
        <article className="d-flex flex-cloumn justify-content-center ">
            <section className="todo-box ">
                <section className="todo-title d-flex justify-content-between">
                    <h3>
                    Title
                </h3>
                <button className="btn">
                   <FaTrash color="red"/>
                </button>
                </section>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ducimus. Consequatur ratione, natus corrupti quod eveniet, cum nemo delectus adipisci alias at, dolores facere quasi distinctio voluptatibus tempora aut eligendi?
            </p>
            </section>
            
        </article>
    );
}
 
export default Todo;