import React, {useState} from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title , setTitle] = useState(props.title);

  // const clickHandler = () =>{
  //   setTitle('Updated!');
  //   console.log("clicked!!!!!!!!!");
  // };
  return (
    <Card className="expense_item">
      <ExpenseDate date={props.date} />
      <div className="expense_item__description">
        <h2>{title}</h2>
        <div className="expense_item__price">${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
