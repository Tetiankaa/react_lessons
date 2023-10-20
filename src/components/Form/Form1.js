import React, {useRef} from 'react';

const Form1 = () => {
        const nameRef = useRef(null);
        const ageRef = useRef(null);

        const person = {name:"", age:""};
    const handleSubmit = (event)=>{
        event.preventDefault();

        if (nameRef.current !== null)
            person.name = nameRef.current.value;

        if (ageRef.current !== null)
            person.age = parseInt(ageRef.current.value);
        console.log(person);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name </label>
                <input ref={nameRef} id='name' type="text"/>
            </div>
            <div>
                <label htmlFor="age">Age </label>
                <input ref={ageRef} id='age' type="number"/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export {Form1};