import React from 'react';
import {counterActions1} from "../redux/slices/counterSlice1";
import {useDispatch} from "react-redux";
import {counterActions2} from "../redux/slices/counterSlice2";

const ComponentTwo = () => {
        const dispatch =useDispatch()

    return (
        <div>
            <button onClick={()=>dispatch(counterActions2.inc())}>+1</button>
            <button onClick={()=>dispatch(counterActions2.dec())}>-1</button>
            <button onClick={()=>dispatch(counterActions2.reset(555))}>reset</button>
        </div>
    );
};

export {ComponentTwo};