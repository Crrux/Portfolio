import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import "./sass/index.css";

import Header from "./layout/Header/header.jsx";
import Footer from "./layout/Footer/footer.jsx";

import Home from "./pages/Home/home.jsx";
import Error from "./pages/Error/error.jsx";

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
