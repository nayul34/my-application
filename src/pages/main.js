import React, { useState } from "react";
import "./Main.css";
import { MdAddCircleOutline } from "react-icons/md";
import Todolist from "../component/Todolist";
import dummyDatas from "../dummyData";
import TodoAdd from "../component/TodoAdd";

let nextId = 4;
const Main = () => {
  const [todos, setTodos] = useState(dummyDatas);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const onInsertToggle = () => {
    setInsertToggle((prev) => !prev);
  };

  const onInsertTodo = (text, date) => {
    if (text === "" || date === "") {
      return alert("할일을 입력해주세요");
    } else {
      const todo = {
        id: nextId,
        date,
        text,
        checked: false,
      };
      setTodos((todos) => todos.concat(todo));
      nextId++;
    }
  };

  const onCheckToggle = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  };
  return (
    <div className="Main">
      <div className="Nav">
        <div className="Nav_top">4:41</div>
        <div className="Nav_bottom">
          <div className="title">To-do list</div>
          {/* <div className="menu">
            <MdAddCircleOutline />
          </div> */}
        </div>
      </div>
      {/* <div>{children}</div> */}
      <Todolist
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      />
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircleOutline />
      </div>
      {insertToggle && (
        <TodoAdd
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
        />
      )}
    </div>
  );
};
export default Main;
