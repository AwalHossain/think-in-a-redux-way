import { addTodo } from '../todos/action';


const addTodoThunk = (input) => {
    return async (dispatch) => {
        const res = await fetch('http://localhost:3001/todos',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: input,
                completed: false
                }
                )

        });
        const todo = await res.json();
        console.log(todo, 'input');

        dispatch(addTodo(todo));
    }
}

export default addTodoThunk;