import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {router} from "./router";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
    // <RouterProvider router={router}/>
);
