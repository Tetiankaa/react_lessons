import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {Car} from "./Car";
import {carActions} from "../redux";

const Cars = () => {
    const {cars,isLoading,trigger} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(carActions.getAll());
    }, [trigger,dispatch]);

    return (
        <div>
            {isLoading && <h1>loading....</h1>}
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars};