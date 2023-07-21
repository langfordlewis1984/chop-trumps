import { useState } from "react";
import "./reset.css";
import "./App.css";

import Header from "./components/Header/Header";
import MChefsain from "./components/Main/Main";
import Modal from "./components/Modal/Modal";
import Footer from "./components/Footer/Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import data from "../src/data.json";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
