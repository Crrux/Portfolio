import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header/header";
import Home from "./pages/Home/Home";
import ContactForm from "./pages/ContactForm/ContactForm";
import Error from "./pages/Error/Error";

function App() {
  return (
    <>
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
