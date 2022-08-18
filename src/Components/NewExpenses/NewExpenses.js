import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  let saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddexpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onsaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
