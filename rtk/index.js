// install react toolkit and redux toolkit  npm install @reduxjs/toolkit react-redux

const { dynamicCounterActions }  = require('./features/dynamicCounter/dynamicCounterSlice')

const store = require('./app/store');


store.subscribe(()=>{

})


store.dispatch(dynamicCounterActions.increment(3))
store.dispatch(dynamicCounterActions.increment(3))
store.dispatch(dynamicCounterActions.increment(1))