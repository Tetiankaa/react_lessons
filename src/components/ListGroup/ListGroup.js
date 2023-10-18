import React, {MouseEvent, useState} from 'react';
import './ListGroup.css';
import styled from "styled-components";
import {FaCity} from 'react-icons/fa';


// const List = styled.ul`
//   list-style: none;
// `
//
// const ListItem = styled.li`
// padding: 5px 0;
//   background: purple;
// `
interface Props {
    items: string[],
    heading: string,
    onSelectItem: (item: string)=>void;
}

const ListGroup = ({items, heading, onSelectItem}: Props) => {

    // const handleClick = (event:MouseEvent) => console.log(event);

    let [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <>
            <h1><FaCity size={25}/> {heading}</h1>
            {/*{items.length === 0 ? <p>No items found</p> : null}*/}
            {items.length === 0 && <p>No item found</p>}

            {/*<ul className={styles["list-group"]}>*/}
                <ul>
                {items.map((item, index) => <li
                     className={index === selectedIndex ? 'pinkColor': 'purpleColor'}
                      key={item}
                      onClick={() => {
                        setSelectedIndex(index);
                        onSelectItem(item)
                    }}>{item}</li>)}
                </ul>
        </>
    );

};

export {ListGroup};