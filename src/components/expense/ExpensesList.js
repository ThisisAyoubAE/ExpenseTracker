import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.expenses.length === 0) {
    return <p className="message">No Expenses Found!</p>;
  }
  return (
    <ul className="expenses-list">
      {props.expenses.map((ex) => (
        <ExpenseItem
          key={ex.id}
          title={ex.title}
          amount={ex.amount}
          date={ex.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
