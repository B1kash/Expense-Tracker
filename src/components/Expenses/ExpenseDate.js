import React from "react";
import './ExpenseDate.css'
const ExpenseDate = (props) => {
  let day = String(props.date.toLocaleString("en-IN", { day: "numeric" }));
  let month = String(props.date.toLocaleString("en-IN", { month: "long" }));
  let year = String(props.date.toLocaleString("en-IN", { year: "numeric" }));
  return (
    <div>
      <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{year}</div>
        <div className="expense-date__day">{day}</div>
      </div>
    </div>
  );
};

export default ExpenseDate;
