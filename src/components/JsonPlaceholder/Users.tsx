import React, {useEffect, useState} from 'react';
import {CanceledError} from "axios";
import {axiosServiceJson} from "../../services/axiosServiceJson";
import {IUser} from "../../services/userServiceJson";
import {Simulate} from "react-dom/test-utils";
import cancel = Simulate.cancel;

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

        setLoading(true);

       const {request, cancel}  = userServiceJson.getAll<IUser[]>();

        request.then(({data})=>{
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
        return cancel();

    },[])
    const deleteUser =(user:IUser)=>{
        setUsers(users.filter(u=>u.id !== user.id));

       userServiceJson.deletebyId(user.id)
            .catch(err=>{
                setError(err.message);
                setUsers([...users]);
            })
    }

    const addUser = () =>{
        const newUser = {id:12, name:"Tanya"};
        // setUsers([...users, newUser]);

    userServiceJson.create(newUser)
    .then(res=>setUsers([res.data, ...users]))
            .catch(error=>{
                setError(error.message);
                setUsers([...users])
            })
    }

    const updateUser = (user:IUser)=>{
        const updatedUser = {...user, name:user.name+"!"};
        setUsers(users.map(user=>user.id === updatedUser.id ? updatedUser : user));

        userServiceJson.updateUser(updatedUser)
            .catch(error=>{
                setError(error.message);
                setUsers([...users]);
            })
    }
    return (
        <>
            <div>
                {error && <h2>{error}</h2>}
                {isLoading && <div className='spinner-border'></div>}
                <button className="btn btn-primary mb-3" onClick={addUser}>Add</button>
                <ul className="list-group">
                    {users.map(user => <li key={user.id} className="list-group-item d-flex justify-content-between">
                        {user.name}
                        <div>
                            <button className="btn btn-outline-danger mx-2" onClick={() => deleteUser(user)}>Delete</button>
                            <button className="btn btn-outline-secondary" onClick={()=>updateUser(user)}>Update</button>
                        </div>
                    </li>)}
                </ul>
            </div>
        </>
    );
};

export {Users};