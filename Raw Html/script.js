// select dom elements

const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment')
const decrementtEl = document.getElementById('decrement')




const initialState = {
    value: 0
} 


//Create reducer function

function countReducer( state = initialState, action){

    if(action.type == 'increment'){
        return {
            ...state,
            value: state.value + 1,
        }
    }else if (action.type == 'decrement'){
        return {
            ...state,
            value: state.value -1,
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
    store.dispatch({
        type: "increment",
    })
})

decrementtEl.addEventListener("click", ()=>{
    store.dispatch({
        type :"decrement",
    })
})