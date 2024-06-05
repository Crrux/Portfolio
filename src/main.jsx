import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "primereact/resources/themes/lara-dark-teal/theme.css";

import "./sass/index.css";

import Home from "./pages/Home/home.jsx";
import ContactForm from "./pages/ContactForm/ContactForm.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/contact" element={<ContactForm />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
