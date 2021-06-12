import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const saveChangeFilterData = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense=props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={saveChangeFilterData}
        />
        <ExpenseChart expenses={filteredExpense}/>
        <ExpensesList items={filteredExpense}/>
      </Card>
    </div>
  );
}

export default Expenses;
