import React from 'react';
import {useDispatch} from "react-redux";
import {counterActions1} from "../redux/slices/counterSlice1";

const ComponentOne = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={()=>dispatch(counterActions1.inc())}>+1</button>
            <button onClick={()=>dispatch(counterActions1.dec())}>-1</button>
            <button onClick={()=>dispatch(counterActions1.reset())}>reset</button>
        </div>
    );
};

export {ComponentOne};