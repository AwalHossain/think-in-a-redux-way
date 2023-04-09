
// suggest me thunk function for toggle todo

import { toggleTodo } from "../todos/action";

const toggleTodoThunk = (id, status) => {
    return async (dispatch) => {
     const res =    await fetch(`http://localhost:3001/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                completed: !status
            })


        });

        const data = await res.json();

        dispatch(toggleTodo(data.id));

    }
}


export default toggleTodoThunk;