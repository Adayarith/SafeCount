import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Usuario from "./components/Perfil"; // 
import ConfigScreen from './components/ConfigScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/perfil" element={<Usuario />} />
        <Route path="/config" element={<ConfigScreen />} /> 
      </Routes>
    </Router>
  );
}

export default App;
