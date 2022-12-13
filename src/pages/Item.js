import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./Item.css";

const Item = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
}) => {
  const { id, text, checked } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onChangeSelectedTodo(todo);
              onInsertToggle();
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
export default Item;
