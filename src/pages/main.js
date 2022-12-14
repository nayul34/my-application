import React, { useState } from "react";
import "./Main.css";
import { MdAddCircleOutline, MdOutlineLteMobiledata } from "react-icons/md";
import Todolist from "../component/Todolist";
import dummyDatas from "../dummyData";
import TodoAdd from "../component/TodoAdd";
import { TbAntennaBars5 } from "react-icons/tb";
import { BsBatteryCharging } from "react-icons/bs";

let nextId = 4;
const Main = () => {
  const [todos, setTodos] = useState(dummyDatas);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertCircle, setInsertCircle] = useState(false);
  //추가 버튼
  const onInsertCircle = () => {
    setInsertCircle((prev) => !prev);
  };
  //list에 item추가
  const onAddTodo = (text, date) => {
    if (text === "" || date === "") {
      return alert("입력해주세요");
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
  //data저장
  const onSelected = (todo) => {
    setSelectedTodo(todo);
  };
  //삭제
  const onRemove = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
  //checkbox 변화
  const onCheckBox = (id) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="Main">
      <div className="Nav">
        <div className="Nav_top">
          4:41
          <div className="Nav_top_left">
            <TbAntennaBars5 />
            <MdOutlineLteMobiledata />
            <BsBatteryCharging />
          </div>
        </div>
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
        onCheckBox={onCheckBox}
        onInsertCircle={onInsertCircle}
        onSelected={onSelected}
        onRemove={onRemove}
      />
      <div className="add-todo-button" onClick={onInsertCircle}>
        <MdAddCircleOutline />
      </div>
      {insertCircle && (
        <TodoAdd
          selectedTodo={selectedTodo}
          onInsertCircle={onInsertCircle}
          onAddTodo={onAddTodo}
        />
      )}
    </div>
  );
};
export default Main;
