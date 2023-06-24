import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import AddBox from "./components/AddBox";
import ColorQuiz from "./components/ColorQuiz";
import Header from "./components/Header";
import ItemPersonCart from "./components/ItemPersonCart";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<AddBox />} />
          <Route path="/color-picker" element={<ColorQuiz />} />
          <Route path="/cart-item" element={<ItemPersonCart />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
