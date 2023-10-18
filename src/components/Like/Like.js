import React, {useState} from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

interface Props{
    onClick:()=>void;
}
const Like = ({onClick}:Props) => {

    let [status, setStatus] = useState(false);

    const toggle = ()=>{
        setStatus(!status);
        onClick()
    }

    if (status) return <AiFillHeart size={30} color={'pink'} onClick={toggle}/>;
    return <AiOutlineHeart size={30} onClick={toggle}/>


};

export {Like};