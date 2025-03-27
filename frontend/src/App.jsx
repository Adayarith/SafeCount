import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Registro from "./components/Registro";
import Dashboard from "./components/Dashboard";
import Perfil from "./components/Perfil";
import ConfigScreen from './components/ConfigScreen'
import HistorialPersonas from "./components/HistorialPersonas";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} /> 
          <Route element={<ProtectedRoute />}>
            <Route path="/registro" element={<Registro />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/config" element={<ConfigScreen />} />
            <Route path="/historial" element={<HistorialPersonas />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
