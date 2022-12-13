import React from "react";
import "./Todolist.css";
import Item from "./Item";

const Todolist = ({ todos }) => {
  return (
    <div className="Todolist">
      <div>
        {todos.map((todo) => (
          <Item todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};
export default Todolist;
