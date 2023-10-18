import React, {useState} from 'react';

const Game = () => {

    // const [game, setGame] = useState({
    //     id:1,
    //     player:{
    //         name:"John"
    //     }
    // });


    // const handleClick = () =>{
    //     setGame({...game, player: {...game.player,name:"Bob"}});
    // }
    // const [pizza, setPizza] = useState({
    //     name:" spicy pepperoni",
    //     toppings: ['Mushroom']
    // })

    // const handleClick = () =>{
    //     setPizza({...pizza,toppings: [...pizza.toppings, "Cheese"]})
    // }

    const [cart, setCart] = useState({
        discount: .1,
        items:[
            {id:1, title:"Potatoes", quantity:1},
            {id:2, title:"Carrot", quantity:1}
        ]
    })
    const handleClick = () =>{
        setCart({...cart,items: cart.items.map(item=> item.id === 1 ? {...item, quantity:item.quantity++ } : item)})
    }
    return (
        <div>
            {/*<p>{game.player.name}</p>*/}

            <button onClick={handleClick}>Change</button>
        </div>
    );
};

export {Game};