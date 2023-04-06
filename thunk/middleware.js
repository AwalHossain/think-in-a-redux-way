

const  delayActionMiddleware = store => next => action => {
    
    if(action.type === 'ADD_TODO'){

        console.log('delaying action', action);

        setTimeout(()=>{
            next(action)
        }, 2000)

        return;
}

return next(action)
}


const fetchAsyncTodos = async (store) => (next) => async (action) => {
    if(typeof action === 'function'){
        return action(store.dispatch, store.getState)
    }

    return next(action )    
}



module.exports = {
    delayActionMiddleware,
    fetchAsyncTodos,
}