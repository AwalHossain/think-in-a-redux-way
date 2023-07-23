

/// counterSlice

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface CounterState {
    value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        increment(state) {
            state.value += 1
        },
        decrement(state) {
            state.value -= 1
        },
      incremnetByNumber(state, action: PayloadAction<number>) {
            state.value += action.payload
      }
    }
})


export const { increment, decrement, incremnetByNumber } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export default counterSlice.reducer