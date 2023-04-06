const {applyMiddleware, createStore} = require('redux')
const {delayActionMiddleware} = require('./middleware')
const { fetchTodos } = require('./function')


const initialState = {
    todos: []
}





const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return{
                ...state,
                todos:[...state.todos,
                
                    {
                        title: action.payload,
                    }
                ]
            }


        case 'LOAD_TODOS':
            return {
                ...state,
                todos:[...state.todos, ...action.payload]

            }

        default:
            return state
    }
}



// create store
const store =createStore(todoReducer,applyMiddleware(delayActionMiddleware))


// subscribe to store

store.subscribe(()=>{
    console.log(store.getState())
})



// store.dispatch({
//     type: 'ADD_TODO',
//     payload: 'Learn Redux'
// })


store.dispatch(fetchTodos);