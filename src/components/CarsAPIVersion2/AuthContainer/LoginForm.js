import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {authService} from "../../../services";
import {useNavigate} from "react-router-dom";
import {useAppContext} from "../../../hooks/useAppContext";

const LoginForm = () => {
    const [serverError, setServerError] = useState(null);
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const {setIsAuth, setMe} = useAppContext();

    const login = async (user)=>{
        try{
            await authService.login(user);
            const {data} = await authService.me();
            setMe(data);
            setIsAuth(true);
            setServerError(null);
            navigate('/cars');

        }catch (e) {
            setServerError(e.response.data)
        }
    }

    return (
        <form onSubmit={handleSubmit(login)}>
            {serverError && <h1>Username or password is incorrect</h1>}
            <div>Username:<input type="text" {...register('username')}/></div>
            <div>Password:<input type="text" {...register('password')}/></div>
            <button>Login</button>
        </form>
    );
};

export {LoginForm};