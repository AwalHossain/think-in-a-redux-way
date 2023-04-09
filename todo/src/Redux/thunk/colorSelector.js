import { colorSelectTodo } from "../todos/action";


const colorSelectorThunk = (id, color) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:3001/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                color: color
            })


        });

        const data = await res.json();

        dispatch(colorSelectTodo(data.id));

    }
}


export default colorSelectorThunk;