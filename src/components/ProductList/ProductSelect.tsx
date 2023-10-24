import React, {useState} from 'react';
import {ProductList} from "./ProductList";

const ProductSelect = () => {
    const [category, setCategory] = useState("");

    return (
        <div>
            <select name="category" onChange={(e)=>setCategory(e.target.value)}>
                <option value=""></option>
                <option value="Clothing">Clothing</option>
                <option value="Household">Household</option>
            </select>
            <ProductList category={category}/>
        </div>
    );
};

export {ProductSelect};