import React, {useEffect, useState} from 'react';
import axios, {AxiosError, CanceledError} from "axios";
import {axiosServiceJson} from "../../services/axiosServiceJson";
import userServiceJson, {IUser} from "../../services/userServiceJson";
import {Simulate} from "react-dom/test-utils";
import cancel = Simulate.cancel;
import {useUsers} from "../../hooks/useUsers";

const Users = () => {
    const {setUsers,users,error,setError,isLoading} = useUsers();

    const deleteUser =(user:IUser)=>{
        setUsers(users.filter(u=>u.id !== user.id));

       userServiceJson.deleteById(user.id)
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

        userServiceJson.update(updatedUser)
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