import React, { useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import Todolist from "./pages/Todolist";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "야호", checked: true },
    {
      id: 2,
      text: "잇팅",
      checked: true,
    },
    {
      id: 3,
      text: "운동",
      checked: false,
    },
  ]);
  return (
    <Main todoLength={todos.length}>
      <Todolist
        todos={todos}
        // onCheckToggle={onCheckToggle}
        // onInsertToggle={onInsertToggle}
        // onChangeSelectedTodo={onChangeSelectedTodo}
      />
      {/* <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div> */}
      {/* {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
        />
      )} */}
    </Main>
  );
};

export default App;
