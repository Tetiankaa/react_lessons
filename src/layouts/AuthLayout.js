import React from 'react';
import {CarsPage} from "../pages";
import {Outlet} from "react-router-dom";

const AuthLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export {AuthLayout};