import React, { useState } from "react";
import "./App.css";
import Main from "./pages/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Main />
      </main>
    </BrowserRouter>
  );
};

export default App;
