import {memo} from "react";

const Todos = memo(({todos, addTodo}) => {
    console.log('todos')
    return (
        <div>
            {todos.map((todo,index)=><div key={index}>{todo}</div>)}
            <button onClick={addTodo}>add</button>

        </div>
    );
});

export {Todos};