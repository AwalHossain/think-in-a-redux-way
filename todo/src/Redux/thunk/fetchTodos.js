import { loadTodos } from "../todos/action";


const fetchTodos = () => {

    return async(dispatch) => {
        const res = await fetch('http://localhost:3001/todos');
        const todos = await res.json();
        
        dispatch(loadTodos(todos));
    }
    console.log("todos", 'todos');
}

export default fetchTodos;