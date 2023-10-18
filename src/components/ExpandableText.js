import React, {useState} from 'react';
interface Props{
    children:string;
    maxChars?:number;
}

const ExpandableText = ({children, maxChars=20}:Props) => {
    let [isExpanded, setExpanded] = useState(false);

    if (children.length <= maxChars) return <p>{children}</p>;

    let text = isExpanded ? children : children.substring(0,maxChars);

    return (
      <p>{text}...<button onClick={()=> setExpanded(!isExpanded)}>{isExpanded ? 'Less' : 'More'}</button></p>
    );
};

export {ExpandableText};
