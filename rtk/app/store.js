const  { configureStore } = require("@reduxjs/toolkit");
const dynamicCounterSlice = require("../features/dynamicCounter/dynamicCounterSlice")



const store = configureStore({
    reducer:{
        dynamicCounter:  dynamicCounterSlice
    }
})