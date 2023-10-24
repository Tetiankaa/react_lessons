import React, {useState} from 'react';

const UseState = () => {
    const [user, setUser] = useState({});
    console.log(user)
    const handler =(e)=>{
        e.preventDefault();
        setUser(prevState => ({...prevState,[e.target.name]:e.target.value}))
    }
    return (
        <form onSubmit={data=>console.log(data)}>
            <input type="text" name={'name'} onChange={handler}/>
            <input type="number" name={"age"} onChange={handler}/>
            <button type={"submit"}>save</button>
        </form>
    );
};

export {UseState};