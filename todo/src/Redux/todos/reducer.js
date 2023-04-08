// write down action reducers for the todos

import { ADD_TODO, ALLCOMPLETE_TODO, CLEARCOMPLETE_TODO, COLORSELECT_TODO, DELETE_TODO, LOAD_TODOS, TOGGLE_TODO } from './actionTypes';
import initialState from './initialState';

const nextTodoId = (todos)=>{
    
    const maxId = todos.reduce((maxId, todo)=>Math.max(todo.id, maxId), -1);

    return maxId+1;
    
}

export const todosReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_TODO:
                return[
                    ...state,
                    {
                        id: nextTodoId(state),
                        task: action.payload,
                        completed: false
                    }
                ]
            case LOAD_TODOS:
                return action.payload;
                
            case TOGGLE_TODO:
                return state.map((todo)=>{
                    if(todo.id !== action.payload){
                        return todo;
                    }

                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                })

            case COLORSELECT_TODO:
                const {id, color}  = action.payload
                return state.map((todo)=>{
                    if(todo.id !== id){
                        return todo;
                    }
                    
                    return {
                        ...todo,
                        color: color,
                    }
                })

                case DELETE_TODO:
                    return state.filter((todo) =>  todo.id !== action.payload)
                
                case ALLCOMPLETE_TODO:
                    return state.map((todo)=>{
                        return{
                            ...todo,
                            completed: true
                        }
                    })


                case CLEARCOMPLETE_TODO:
                    return state.filter((todo)=> !todo.completed)
                    
            default:
                return state;
        }
}   