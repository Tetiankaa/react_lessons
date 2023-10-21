import React from 'react';
import {useForm} from "react-hook-form";
import { z} from 'zod';
import {zodResolver} from "@hookform/resolvers/zod";

const schema =z.object({
    name:z.string().min(3, {message:"Here we can change the custom error message"}),
    age:z.number().min(18)
});

const Form4Zod = () => {
    const {register,handleSubmit,formState:{errors,isValid}} = useForm({resolver:zodResolver(schema)});

    return (
        <form onSubmit={handleSubmit(data=>console.log(data))}>
            <div>
                <label htmlFor="name">Name </label>
                <input {...register('name')}
                       id='name' type="text"/>
                {errors.name && <p>{errors.name.message}</p>}

            </div>
            <div>
                <label htmlFor="age">Age </label>
                <input {...register('age', {value:true})}
                       id='age' type="number"/>
                {errors.age && <p>{errors.age.message}</p>}
            </div>
            <button type='submit'>Submit</button>
        </form>


    );
};

export {Form4Zod};