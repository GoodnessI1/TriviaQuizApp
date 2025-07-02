import { BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Content from "./components/Content";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Content />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
