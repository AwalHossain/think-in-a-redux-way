import { applyMiddleware, createStore } from 'redux'


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
const store =createStore(todoReducer,applyMiddleware())


// subscribe to store

store.subscribe(()=>{
    console.log(store.getState())
})


