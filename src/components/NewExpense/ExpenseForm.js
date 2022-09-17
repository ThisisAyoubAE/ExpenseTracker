import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const titleChangeHandler = (e) => {
    setTitleValue(e.target.value);
    // console.log(e.target.value);
  };
  const [amountValue, setAmountValue] = useState("");
  const amountChangeHandler = (e) => {
    setAmountValue(e.target.value);
    // console.log(e.target.value);
  };
  const [dateValue, setDateValue] = useState("");
  const dateChangeHandler = (e) => {
    setDateValue(e.target.value);
    // console.log(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: titleValue,
      amount: +amountValue,
      date: new Date(dateValue),
    };
    props.onSubmitData(expenseData);
    setTitleValue("");
    setAmountValue("");
    setDateValue("");
    console.log(expenseData);
  };
  return (
    <form className="expense-form" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            placeholder="title"
            type="text"
            value={titleValue}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountValue}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateValue}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
