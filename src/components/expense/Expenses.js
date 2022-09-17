import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter(
    (ex) => ex.date.getFullYear() === +filteredYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />

      {/* <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      ></ExpenseItem> */}
    </Card>
  );
};

export default Expenses;
