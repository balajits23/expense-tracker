import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  let [enteredTitle, setEnteredTitle] = useState("");
  let [enteredAmount, setEnteredAmount] = useState("");
  let [enteredDate, setEnteredDate] = useState("");
  // let [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  let titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({ ...userInput, enteredTitle: e.target.value });
  };

  let amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({ ...userInput, enteredAmount: e.target.value });
  };

  let dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({ ...userInput, enteredDate: e.target.value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    let expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onsaveExpenseData(expenseData);
    // console.log(expenseData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
