const  { configureStore, getDefaultMiddleware } = require("@reduxjs/toolkit");
const dynamicCounterSlice = require("../features/dynamicCounter/dynamicCounterSlice")
const {createLogger}  = require('redux-logger')

const logger = createLogger();

const store = configureStore({
    reducer:{
        dynamicCounter:  dynamicCounterSlice
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(logger)
    
})



module.exports = store;