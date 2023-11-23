import React from 'react';
import {Users} from "./components/Users";
import {UseMemoComponent} from "./components/useMemoComponent";
import {UseCallBackComponent} from "./components/useCallBackComponent";

const App = () => {
    return (
        <div>
            {/*<Users/>*/}
            {/*<UseMemoComponent/>*/}
            <UseCallBackComponent/>
        </div>
    );
};

export default App;