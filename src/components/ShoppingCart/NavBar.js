import React from 'react';
interface Props {
    cartCount:number;
}
const NavBar = ({cartCount}:Props) => {
    return (
        <div>
           Remaining carts: {cartCount}
        </div>
    );
};

export {NavBar};