import React from "react";
import "./Todolist.css";
import Item from "./Item";

const Todolist = ({ todos, onCheckBox, onSelected, onRemove }) => {
  return (
    <div className="Todolist">
      <div>
        {todos.map((todo) => (
          <Item
            todo={todo}
            key={todo.id}
            onCheckBox={onCheckBox}
            onSelected={onSelected}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};
export default Todolist;
