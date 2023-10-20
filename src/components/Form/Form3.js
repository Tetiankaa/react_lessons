import React from 'react';

import {useForm} from "react-hook-form";

const Form3 = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();

    return (
        <form onSubmit={handleSubmit(data=>console.log(data))}>
            <div>
                <label htmlFor="name">Name </label>
                <input {...register('name',{required:true,minLength:3})}
                       id='name' type="text"/>
                {errors.name?.type === 'required' && <p>The name field is required</p>}
                {errors.name?.type === 'minLength' && <p>The name must be at least 3 characters</p>}
            </div>
            <div>
                <label htmlFor="age">Age </label>
                <input {...register('age')}
                       id='age' type="number"/>
            </div>
            <button type='submit'>Submit</button>
        </form>


    );
};

export {Form3};