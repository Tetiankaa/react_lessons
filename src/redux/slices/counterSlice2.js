import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count2: 0
}
const counterSlice2 = createSlice({
    name: 'counterSlice2',
    initialState,
    reducers: {
        inc: state => {
            state.count2 += 1
        },
        dec: state => {
            state.count2 -= 1
        },
        reset:(state, action)=>{
            state.count2 = action.payload
        }
    }
});

const {reducer:counterReducer2, actions:{inc,dec,reset}} = counterSlice2;

const counterActions2 = {inc,dec,reset};

export {counterActions2, counterReducer2}