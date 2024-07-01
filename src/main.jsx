import React from "react";
import ReactDOM from "react-dom/client";
import "primereact/resources/themes/lara-dark-teal/theme.css";

import "./sass/index.css";

import Home from "./pages/Home/Home.jsx";
import ContactForm from "./pages/ContactForm/ContactForm.jsx";

import Header from "./layout/Header/header.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
