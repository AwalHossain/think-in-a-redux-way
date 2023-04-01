// rootReducer.js
import { combineReducers } from 'redux';
import { filterReducer } from './Filter/reducer';
import { todosReducer } from './todos/reducer';


const rootReducer = combineReducers({
    todos: todosReducer,
        filters: filterReducer,
});


export default rootReducer;