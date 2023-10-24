import React from 'react';
import {Car} from "./Car";

const Cars = ({cars,setUpdateCar}) => {
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setUpdateCar={setUpdateCar}/>)}
        </div>
    );
};
export {Cars};