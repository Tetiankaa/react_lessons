import React, {useEffect, useState} from 'react';

import css from './Users.module.css';
import {User} from "../User/User";
import axios from "axios";
import {axiosService} from "../../../services/axiosService";
import {userService} from "../../../services/userService";
import {UserDetails} from "../UserDetails/UserDetails";

const Users = () => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState(null);

    // const click = (userId)=>{
    //     console.log(userId)
    // }

    const click = async (userId)=>{
           let {data} =  await userService.getById(userId);
        setUserDetails(data);
    }

    useEffect(()=>{
        // fetch('https://jsonplaceholder.typicode.com/users').then(r=>r.json()).then(value => setUsers(value))
        // axios.get('https://jsonplaceholder.typicode.com/users').then(({data})=>setUsers(data))
        // axiosService.get('/users').then(({data})=>setUsers(data))
        userService.getAll().then(({data})=>setUsers(data))
    },[]);
    return (
        <div>
            <div className={css.Users}>
                {users.map(user => <User key={user.id} user={user} click={click}/>)}
            </div>

            {userDetails && <UserDetails userDetails={userDetails}/> }
        </div>
    );
};

export {Users};