import React, {useEffect, useState} from 'react';

const ProductList = ({category}:{category:string}) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(()=>{
        console.log('fetching in ' +category);
        // setProducts(['orange', 'apple']);

    },[category])
    return (
        <div>
            
        </div>
    );
};

export {ProductList};