import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    //name has no importance
    name: 'counterApp',
    //initial state create
    initialState: {
        value: 0
    },
    reducers: {
        //logic to update the values
        // actions are created inside the reducers
        increment: (state, data) => {
            if (!data.payload) {
                state.value = state.value + 1
                
            } else {
                
                state.value = state.value + data.payload
            }
        },
        decrement: (state, data) => {
            if (!data.payload) {
                state.value = state.value - 1
                
            } else {
                state.value = state.value - data.payload //state.value=state.value-1
            }
            },
        reset: (state) => {
            state.value = 0;
        }
    }
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;