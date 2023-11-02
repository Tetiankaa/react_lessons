import React from 'react';
import {CarForm, Cars} from "../components/CarsAPIVersion2";

const CarsPage = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars/>
        </div>
    );
};

export {CarsPage};