import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../../../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidators} from "../../../validators/carValidators";

const CarForm = ({setTrigger, updateCar,setUpdateCar}) => {
    const {register, reset, setValue, handleSubmit, formState: {isValid, errors}}
        = useForm({mode: 'all', resolver: joiResolver(carValidators)});

    const save = async (car) => {
        if (updateCar){
            await carService.updateById(updateCar.id, car);
            setUpdateCar(!updateCar);
        }else{
             await carService.create(car);
        }
        setTrigger(prev => !prev);
        reset();
        // setCars(prev=>[...prev,data ]);
        // reset();
    }

    useEffect(() => {
        if (updateCar){
            setValue('brand', updateCar.brand,{shouldValidate:true})
            setValue('price', updateCar.price,{shouldValidate:true})
            setValue('year', updateCar.year,{shouldValidate:true})

        }
    }, [updateCar])

    return (
        <>
            <form onSubmit={handleSubmit(save)}>
                {/*<input type="text" placeholder={'brand'} {...register('brand', {*/}
                {/*    // minLength:{value:1, message:"min 1 character"},*/}
                {/*    // maxLength:{value:20, message:"max 20 characters"}*/}
                {/*    pattern: {value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message: 'only letters min 1 and max 20'}*/}
                {/*})}/>*/}

                {/*<input type="text" placeholder={'price'} {...register('price', {*/}
                {/*    min: {value: 0, message: 'min 0'},*/}
                {/*    max: {value: 1_000_000, message: "max 1 000 000"},*/}
                {/*    valueAsNumber: true*/}
                {/*})}/>*/}
                {/*<input type="text" placeholder={'year'} {...register('year', {*/}
                {/*    min: {value: 1990, message: 'min 1990'},*/}
                {/*    max: {value: new Date().getFullYear(), message: 'max current year'},*/}
                {/*    valueAsNumber: true*/}
                {/*})}/>*/}
                {/*<button disabled={!isValid}>save</button>*/}

                <input type="text" placeholder={'brand'} {...register('brand')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber: true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber: true})}/>
                <button disabled={!isValid}>save</button>
            </form>

            {errors.brand && <div>{errors.brand.message}</div>}
            {errors.price && <div>{errors.price.message}</div>}
            {errors.year && <div>{errors.year.message}</div>}
        </>
    );
};

export {CarForm};