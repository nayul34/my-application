import React from "react";
import "./Main.css";
import { MdAddCircle } from "react-icons/md";

const Main = ({ children, todoLength }) => {
  return (
    <div className="Main">
      <div className="Nav">
        <div className="Nav_top">4:41</div>
        <div className="Nav_bottom">
          <div className="title">To-do list({todoLength})</div>
          <div className="menu">
            <MdAddCircle />
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
export default Main;
