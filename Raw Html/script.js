// select dom elements

const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment')
const decrementtEl = document.getElementById('decrement')




const initialState = {
    value: 0
} 


/** Action identifiers */
const INCREMENT = "increment";
const DECREMENT = "decrement";


/** Action Creators */

const increment = (value)=>{
return {
    type: INCREMENT,
    payload: value,
}
}

const decrement =(value)=>{
   return{
    type :DECREMENT,
    payload: value,
   }
}

//Create reducer function

function countReducer( state = initialState, action){

    if(action.type == INCREMENT){
        return {
            ...state,
            value: state.value + action.payload,
        }
    }else if (action.type == DECREMENT){
        return {
            ...state,
            value: state.value - action.payload,
        }
    }else{
        return state;
    }
}


//create a store 
const store = Redux.createStore(countReducer);


const render = ()=>{
    const state = store.getState();
    counterEl.innerText =  state.value.toString();

}

render();

store.subscribe(render)


//button click listeners
incrementEl.addEventListener('click', ()=>{
    store.dispatch(increment(5))
})

decrementtEl.addEventListener("click", ()=>{
    store.dispatch(decrement(2))
})