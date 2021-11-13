import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home.";
import About from "../src/pages/About/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
