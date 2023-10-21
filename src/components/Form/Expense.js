import React, {useState} from 'react';
import {ExpenseForm} from "./ExpenseForm";
import {ExpenseFilter} from "./ExpenseFilter";
import {ExpenseList} from "./ExpenseList";

const Expense = () => {
    const [expenses, setExpenses] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');

    const visibleList = selectedItem ? expenses.filter(element => element.category === selectedItem) : expenses;
    return (
        <div>
            <ExpenseForm onSubmit={(data)=>setExpenses([...expenses,{...data,id:expenses.length+1}])}/>
            <ExpenseFilter onSelect={(category)=>setSelectedItem(category)}/>
            <ExpenseList expenses={visibleList} onDelete={(id)=>setExpenses(expenses.filter(expense=>expense.id !== id))}/>
        </div>
    );
};

export {Expense};