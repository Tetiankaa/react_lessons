import React, {useRef} from 'react';

const UseRef = () => {
    const name = useRef();
    const age = useRef();

    const save = (e) => {
      e.preventDefault();
        console.log(name.current.value);
        console.log(age.current.value);

    }
    return (
        <form onSubmit={save}>
            <input type="text" ref={name}/>
            <input type="text" ref={age}/>
            <button type={"submit"}>save</button>
        </form>
    );
};

export {UseRef};