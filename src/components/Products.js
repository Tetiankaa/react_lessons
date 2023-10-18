import React, {useState} from 'react';
import {produce} from 'immer';
const Products = () => {

    // const [drink, setDrink] = useState({
    //     title:"Americano",
    //     price:5
    // })
    // const handleClick = () =>{
    //     // const newDrink = {
    //     //     // title:drink.title,
    //     //     ...drink,
    //     //     price:4
    //     // }
    //     // setDrink(newDrink);
    //
    //     setDrink({...drink, price: 4})
    // }
    // const [products, setProducts] = useState({
    //     fastFood:"burger",
    //     petShop:"feed",
    //     groceryStory:{
    //         sweets:"cake",
    //         drink:"coca-cola"
    //     }
    // })

    // const handleClick = ()=>{
    //     setProducts({...products, groceryStory:{...products.groceryStory,drink: "fanta"}})
    // }

    // const [tags, setTags] = useState(['happy', 'cheerful']);

    // const handleClick = () =>{
    //     // Add
    //     setTags([...tags, 'exciting']);
    //
    //     // Remove
    //     setTags(tags.filter(tag=>tag !== 'happy'))
    //
    //     // Update
    //
    //     setTags(tags.map(tag => tag === 'cheerful' ? 'sad' : tag));
    // }

    const [bugs, setBugs] = useState([
        {id:1, title: 'Bug 1', fixed:false},
        {id:2, title: 'Bug 2', fixed:false}
    ]);

    const handleClick = () =>{
        // setBugs(bugs.map(bug=> bug.id === 1 ? {...bug, fixed:true} : bug))

         setBugs(produce(draft=>{
             const bug = draft.find(bug=> bug.id === 1);
             if (bug) bug.fixed=true;
         }))
    };
    return (
        <div>
            {bugs.map(bug=><p key={bug.id}>{bug.title} {bug.fixed ? 'Fixed' : 'new'}</p>)}
            {/*<h1>{drink.price} eur</h1>*/}
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export {Products};