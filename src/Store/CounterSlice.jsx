import { createSlice } from '@reduxjs/toolkit'


const counterSlice = createSlice({
    name:"Counter",
    initialState:0,
    reducers:{
        decrement(state){
            return state - 1;
        },
        increment(state){
            return state + 1;
        },
        incrementX(state, actions){
            return state + actions.payload
        }
    }
})

export const { decrement, increment, incrementX } = counterSlice.actions;
export default counterSlice.reducer;