import {useCallback, useState} from "react";
import {Todos} from "./Todos";

const UseCallBackComponent = () => {
    const [todos, setTodos] = useState(['newTodo']);

    const [count, setCount] = useState(0);


    const addTodo = useCallback(()=>{
        setTodos(prevState => [...prevState,'nextTodo'])
    },[]);

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo}/>
            <div>{count}</div>
            <button onClick={()=>setCount(prevState => ++prevState)}>inc</button>
        </div>
    );
};

export {UseCallBackComponent};