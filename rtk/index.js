// install react toolkit and redux toolkit  npm install @reduxjs/toolkit react-redux

const { dynamicCounterActions }  = require('./features/dynamicCounter/dynamicCounterSlice')
// const { dynamicCounterActions }  = require('./features/dynamicCounter/dynamicCounterSlice')

const store = require('./app/store');
const { fetchPost } = require('./features/post/postSlice');


store.subscribe(()=>{

})

store.dispatch(fetchPost())

// store.dispatch(dynamicCounterActions.increment(3))
// store.dispatch(dynamicCounterActions.increment(3))
// store.dispatch(dynamicCounterActions.increment(1))