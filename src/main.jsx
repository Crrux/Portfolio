import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sass/index.css";

import Header from "./layout/Header/header.jsx";
import Footer from "./layout/Footer/Footer.jsx";

import Home from "./pages/home/Home.jsx";
import Error from "./pages/Error/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
