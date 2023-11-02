import React from 'react';
import {ThirdComponent} from "./ThirdComponent";
import {useAppContext} from "../../hooks/useAppContext";

const SecondComponent = () => {
    // const value = useContext(Context)
    const value = useAppContext();
    return (
        <div style={{background:'lightcyan'}}>
            <p>Some content inside 2nd component</p>
            {value}
            <ThirdComponent/>
        </div>
    );
};

export {SecondComponent};