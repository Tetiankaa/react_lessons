import React from 'react';
import {SecondComponent} from "./SecondComponent";

const FirstComponent = () => {
    return (
        <div style={{background:'lightcoral'}}>
            <p>Some content inside 1st component</p>
            <SecondComponent/>
        </div>
    );
};

export {FirstComponent};