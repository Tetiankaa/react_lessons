import React from 'react';
import {Link, Outlet} from "react-router-dom";

const FirstLayout = () => {
    return (
        <>
            <Link to={'/home'}>Home</Link>
            <Link to={'/posts'}>Posts</Link>
            <hr/>
            <Outlet/>
        </>
    );
};

export {FirstLayout};