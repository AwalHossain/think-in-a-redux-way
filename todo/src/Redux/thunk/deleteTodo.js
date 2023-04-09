import { deleteTodo } from "../todos/action";

const deleteTodoThunk = (id, status) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:3001/todos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },

        });

        const data = await res.json();

        dispatch(deleteTodo(data.id));

    }
}

export default deleteTodoThunk;