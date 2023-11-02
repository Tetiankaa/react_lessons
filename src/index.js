import React from 'react';
import ReactDOM from 'react-dom/client';

// import {App}from './App';
import {ContextProvider} from "./hoc";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ContextProvider>
    //     {/*<App/>*/}
    // </ContextProvider>

    <ContextProvider>
        <RouterProvider router={router}/>
    </ContextProvider>
);
