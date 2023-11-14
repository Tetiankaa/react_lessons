import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    count1: 0
}
const counterSlice1 = createSlice({
    name: 'counterSlice1',
    initialState,
    reducers: {
        inc: state => {
            state.count1 += 1
        },
        dec: state => {
            state.count1 -= 1
        },
        reset: state => {
            state.count1 = 0
        }
    }
})

const {reducer:counterReducer1, actions:{inc,dec,reset}} = counterSlice1;

const counterActions1 = {inc,dec,reset};

export {counterReducer1, counterActions1}