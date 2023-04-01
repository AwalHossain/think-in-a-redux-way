// rootReducer.js
import { combineReducers } from 'redux';
import { filterReducer } from './Filter/reducer';
import todoReducer from './todoReducer';


const rootReducer = combineReducers({
        todos: todoReducer,
        filter: filterReducer,
});


export default rootReducer;