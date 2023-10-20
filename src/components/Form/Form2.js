import React, {useState} from 'react';


const Form2 = () => {

    const [person,setPerson] = useState({
        name:"", age:0
    })

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(person);
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name </label>
                <input onChange={(event)=>setPerson({...person,name:event.target.value})}
                   value={person.name}    id='name' type="text"/>
            </div>
            <div>
                <label htmlFor="age">Age </label>
                <input onChange={(event)=>setPerson({...person,age:+event.target.value})}
                    value={person.age}   id='age' type="number"/>
            </div>
            <button type='submit'>Submit</button>
        </form>
    );
};

export {Form2};