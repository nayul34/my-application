import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoAdd.css";

const TodoAdd = ({ onInsertCircle, onAddTodo, selectedTodo }) => {
  //date기본값
  const [il, setIl] = useState("");
  //할일기본값
  const [value, setValue] = useState("");

  const onDateChange = (e) => {
    setIl(e.target.value);
  };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onAddTodo(value, il);
    setValue("");
    setIl("");
    onInsertCircle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div>
      <div className="background" onClick={onInsertCircle}></div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="closing date"
          value={il}
          onChange={onDateChange}
        ></input>
        <input
          placeholder="please type"
          value={value}
          onChange={onChange}
        ></input>
        <button type="submit">
          <MdAddCircle />
        </button>
      </form>
    </div>
  );
};

export default TodoAdd;
