import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoAdd.css";

const TodoAdd = ({ onInsertToggle, onInsertTodo, selectedTodo }) => {
  const [value, setValue] = useState("");
  const [il, setIl] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    setIl(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    onInsertTodo(value, il);
    setValue("");
    setIl("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);
  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form onSubmit={onSubmit}>
        <input
          placeholder="closing date"
          value={il}
          onChange={onChange}
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
