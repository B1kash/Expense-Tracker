import React, { useState } from "react";
import "./App.css";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/newExpense/NewExpense";

function App() {
  const Dummy_Expesnse = [
    {
      id: 1,
      title: "Car Insurence",
      amount: 234.45,
      date: new Date(2020, 7, 14),
    },
    { id: 2, title: "Groceries", amount: 29, date: new Date(2020, 7, 14) },
    {
      id: 3,
      title: "Toiler paper",
      amount: 34.52,
      date: new Date(2020, 7, 14),
    },
    { id: 4, title: "House Rent", amount: 454.5, date: new Date(2020, 7, 14) },
    { id: 5, title: "Book", amount: 76, date: new Date(2023, 3, 12) },
    { id: 6, title: "Spotify Premium", amount: 11, date: new Date(2023, 3, 3) },
  ];

  const [expenses, setExpense] = useState(Dummy_Expesnse);

  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
