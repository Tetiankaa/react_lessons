import React from 'react';
import styles from './Button.module.css'
interface Props{
    children:string;
    color?:'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info';
    onClick:()=>void;
}
const Button = ({children,color='primary',onClick}:Props) => {
    return (
        <div>

            {/*<button type="button" className={"btn btn-" + color} onClick={onClick}>{children}</button>*/}
            <button type="button" className={[styles.btn,styles['btn-' + color]].join(" ")} onClick={onClick}>{children}</button>
        </div>
    );
};

export {Button};