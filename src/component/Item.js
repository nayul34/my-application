import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./Item.css";

const Item = ({ todo }) => {
  const { id, date, text, checked, content } = todo;
  return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="haveto">
          <div className="tododate">{date}</div>
          <div className="text">{text}</div>
        </div>
        <div className="more">{content}</div>
      </div>
    </div>
  );
};
export default Item;
