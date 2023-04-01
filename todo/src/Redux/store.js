// install compose with redux dev tools and thunk middleware with npm i redux-devtools-extension redux-thunk

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';


const store = createStore(rootReducer, composeWithDevTools());


export default store;       