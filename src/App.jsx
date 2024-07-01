import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header/header";
import Home from "./pages/Home/Home";
import ContactForm from "./pages/ContactForm/ContactForm";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Error from "./pages/Error/Error";
import Test from "./pages/Test/Test";

import { useUser } from "./lib/customHooks";

function App() {
  const [user, setUser] = useState(null);
  const { connectedUser } = useUser();

  useEffect(() => {
    setUser(connectedUser);
  }, [connectedUser]);
  return (
    <>
      <BrowserRouter>
        <Header user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/test" element={<Test />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
