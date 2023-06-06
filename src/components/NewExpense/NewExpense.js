import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      title: enteredExpenseData.title,
      amount: enteredExpenseData.amount,
      date: enteredExpenseData.date,
      id: Math.random().toString()
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditinHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  let expenseContent = (
    <button onClick={startEditinHandler}>Add New Expense</button>
  );

  if (isEditing) {
    expenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={stopEditingHandler}
      />
    );
  }

  return <div className='new-expense'>{expenseContent}</div>;
};

export default NewExpense;

