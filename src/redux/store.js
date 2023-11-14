import {configureStore} from "@reduxjs/toolkit";

import {counterReducer1} from "./slices/counterSlice1";
import {counterReducer2} from "./slices/counterSlice2";
import {characterReducer} from "./slices/characterSlice";


const store = configureStore({
    reducer:{
        counter1:counterReducer1, // reducer function to manage the state
        counter2:counterReducer2,
        characters:characterReducer
    }
})
export {store}