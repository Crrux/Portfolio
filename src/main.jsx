import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primereact/resources/themes/lara-dark-teal/theme.css";

import "./sass/index.css";

import Home from "./pages/Home/Home.jsx";
import ContactForm from "./pages/ContactForm/ContactForm.jsx";
import Login from "./pages/Login/Login.jsx";
import Error from "./pages/Error/error.jsx";

import Header from "./layout/Header/header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
