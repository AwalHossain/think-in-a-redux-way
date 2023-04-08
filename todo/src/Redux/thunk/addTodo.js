import { addTodo } from '../todos/action';


const addTodoThunk = (input) => {
    console.log(input, 'input');
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

        dispatch(addTodo(todo));
    }
}

export default addTodoThunk;