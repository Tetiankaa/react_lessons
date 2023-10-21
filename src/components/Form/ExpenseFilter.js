import React from 'react';

const ExpenseFilter = ({onSelect}) => {
    return (
        <div>
            <select onChange={event => onSelect(event.target.value)}>
                <option value="">All categories</option>
                <option value="Grocery">Grocery</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Utilities">Utilities</option>
            </select>

        </div>
    );
};

export {ExpenseFilter};