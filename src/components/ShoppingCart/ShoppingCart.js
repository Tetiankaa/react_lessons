import React, {useState} from 'react';
import {NavBar} from "./NavBar";
import {Cart} from "./Cart";

const ShoppingCart = () => {
    const [cartItems, setCartItems] = useState(['Apple',"Melon","Strawberry","Pear"]);

    return (
        <div>
            <NavBar cartCount={cartItems.length}/>
            <Cart cartItems={cartItems} onClear={()=> setCartItems([])}/>
        </div>
    );
};

export {ShoppingCart};