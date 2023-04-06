

const fetchTodos = () => {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const todosJson = await todos.json();

    dispatch({
        type: 'LOAD_TODOS',
        payload: todosJson
    })

    console.log(`Number of the updated todos`);

}

module.exports = {
    fetchTodos
}
