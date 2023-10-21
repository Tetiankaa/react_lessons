import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import css from './ExpenseTracker.module.css';

const ExpenseForm = ({onSubmit}) => {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();

    const [info, setInfo] = useState({description:'', amount:0, category:''});

    return (
        <form onSubmit={handleSubmit(
            ()=>{ onSubmit(info); reset()}
        )}>
            <div>
                <label htmlFor="description">Description  </label>
                <input type="text" id='description' className={css.Input}
                       {...register('description',{required:true,minLength:3})}
                onChange={(e)=>setInfo({...info,description:e.target.value})}
                />

                {errors.description?.type === 'required' && <p className={css.Error}>Description is required</p>}
                {errors.description?.type === 'minLength' && <p className={css.Error}>Description should be at least 3 characters</p>}
            </div>

            <div>
                <label htmlFor="amount">Amount  </label>
                <input type="number" id='amount' {...register('amount',{required:true,valueAsNumber:true})}
                       onChange={(e)=>setInfo({...info,amount:+e.target.value})}
                       className={css.Input}
                />
                {errors.amount?.type === 'required' && <p className={css.Error}>Amount is required</p>}
            </div>

            <div>
                <label htmlFor="category">Category  </label>
                <select id="category" {...register('category',{required:true})}
                onChange={(e)=>setInfo({...info,category:e.target.value})}
                        className={css.Input}
                >
                    <option value=""></option>
                    <option value="Grocery">Grocery</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Utilities">Utilities</option>
                </select>
                {errors.category?.type === 'required' && <p className={css.Error}>Category is required</p>}
            </div>
            <button type={"submit"} className={css.Button}>Submit</button>
        </form>
    );
};

export {ExpenseForm};