import React from "react";
// import TodoItem from "./TodoItem";
import "./Todolist.css";
import Item from "./Item";

const Todolist = ({
  todos,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  return (
    <div className="Todolist">
      <div>
        {todos.map((todo) => (
          <Item
            todo={todo}
            key={todo.id}
            // onCheckToggle={onCheckToggle}
            // onInsertToggle={onInsertToggle}
            // onChangeSelectedTodo={onChangeSelectedTodo}
          />
        ))}
      </div>
    </div>
  );
};
export default Todolist;
