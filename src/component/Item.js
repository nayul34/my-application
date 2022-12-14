import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./Item.css";
import { BiTrash } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";

const Item = ({ todo, onCheckBox, onSelected, onRemove }) => {
  const { id, date, text, checked, content } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckBox(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckBox(id);
            }}
          />
        )}
        <div className="haveto">
          <div className="tododate">{date}</div>
          <div className="text">{text}</div>
        </div>
        {/* <div className="more">{content}</div> */}
      </div>
      <div
        className="remove"
        onClick={() => {
          onSelected(todo);
          onRemove(id);
        }}
      >
        <BiTrash />
      </div>
      <div className="update" onClick={() => {}}>
        <BsPencil />
      </div>
    </div>
  );
};
export default Item;
