import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses,currency } = useContext(AppContext);
    const [editableBudget, setEditableBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleBudgetChange = (event) => {
        const newBudget = parseInt(event.target.value);
       
        
        // Ensure the new budget is not lower than the total expenses
        if (newBudget >= totalExpenses) {
            if(newBudget> 20000){
                alert("Budget cannot be gratter than 20000.");
            }else{
                setEditableBudget(newBudget);
            }
            
            
        } else {
            alert("Budget cannot be lower than the allocated expenses.");
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                value={editableBudget}
                onChange={handleBudgetChange}
                min={totalExpenses} // Minimum budget is the total allocated expenses
                max={20000} // Maximum budget allowed
                step={10} // Increment by 10
            />
        </div>
    );
};

export default Budget;
