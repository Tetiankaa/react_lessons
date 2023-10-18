import React, {useState} from 'react';
import {ListGroup} from "./components/ListGroup/ListGroup";
import {Alert} from "./components/Alert";
import {Button} from "./components/Button";

const App = () => {
    const items = ["New York", "San Francisco", "Tokyo", "London"];

    const handleSelectItem = (item:string)=>{
        console.log(item);
    }
    // let handleClick = () => console.log('Clicked')
    // let [alertVisible, setAlertVisibility] = useState(false);

    return (
        <div>
            <ListGroup items={items} heading={"Cities"} onSelectItem={handleSelectItem}/>

            {/*    <Alert>*/}
            {/*        Hello <strong>World</strong>*/}
            {/*    </Alert>*/}

            {/*{alertVisible && <Alert children={'My alert'} onClose={()=>setAlertVisibility(false)}/>}*/}

            {/*<Button onClick={()=>setAlertVisibility(true)} children={"Click"}/>*/}

        </div>
    );
};

export default App;