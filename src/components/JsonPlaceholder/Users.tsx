import React, {useEffect, useState} from 'react';
import axios, {AxiosError, CanceledError} from "axios";

interface IUser{
    id:number,
    name:string
}
const Users = () => {
    // useEffect(() => {
    //     const fetchUsers = async () =>{
    //         try{
    //             const {data} = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
    //             setUsers(data);
    //         }catch (e) {
    //             setError((e as AxiosError).message)
    //         }
    //     }
    //
    //     fetchUsers();
    //
    // }, []);

    const [users, setUsers] = useState<IUser[]>([]);

    const [error, setError] = useState('');

    const [isLoading, setLoading] = useState(false);

    useEffect(()=>{
        const controller = new AbortController();

        setLoading(true);

        axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users',{signal:controller.signal})
            .then(({data})=>{
                setUsers(data);
                // setLoading(false);
            })
            .catch((error)=>{
               if (error instanceof CanceledError) return;
               setError(error.message);
               // setLoading(false);
            })
            .finally(()=>{
                setLoading(false);
            })
        return ()=> controller.abort();

    },[])
    const deleteUser =(user:IUser)=>{
        setUsers(users.filter(u=>u.id !== user.id));

        axios.delete(`https://jsonplaceholder.typicode.com/users/${user.id}`)
            .catch(err=>{
                setError(err.message);
                setUsers([...users]);
            })
    }

    return (
        <>
            <div>
                {error && <h2>{error}</h2>}
                {isLoading && <div className='spinner-border'></div>}
                <ul className="list-group">
                    {users.map(user => <li key={user.id} className="list-group-item d-flex justify-content-between">
                        {user.name}
                    <button className="btn btn-outline-danger" onClick={()=>deleteUser(user)}>Delete</button>
                    </li>)}
                </ul>
            </div>
        </>
    );
};

export {Users};