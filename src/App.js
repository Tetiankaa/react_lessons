import React from 'react';
import {UseRef} from "./UseRef/UseRef";
import {UseState} from "./UseState/UseState";
import {PostsContainer} from "./UseForm/components/PostContainer/PostsContainer";
import {CarContainer} from "./UseForm/components/CarContainer/CarContainer";

const App = () => {
    return (
        <div>
            {/*<UseRef/>*/}
            {/*<UseState/>*/}
            {/*<PostsContainer/>*/}
            <CarContainer/>
        </div>
    );
};

export default App;