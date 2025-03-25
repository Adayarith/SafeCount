import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registro from "./components/Registro";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/registro" element={<Registro />} />  {/* Página de registro */}
        <Route path="/" element={<Login />} />       {/* Página principal */}
      </Routes>
    </Router>
  );
}

export default App;
