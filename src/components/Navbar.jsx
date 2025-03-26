import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="bg-white p-2 shadow-md fixed bottom-0 left-0 w-full flex justify-around z-20">
      <button
        aria-label="Inicio"
        className="p-2 hover:bg-gray-100 rounded-md"
        onClick={() => navigate('/')}
      >
        <img src="/src/assets/Menu.jpg" alt="Menú" className="h-8" />
      </button>
      <button
        aria-label="Historial"
        className="p-2 hover:bg-gray-100 rounded-md"
      >
        <img src="/src/assets/Historial.jpg" alt="Historial" className="h-8" />
      </button>
    </nav>
  );
}

export default Navbar;
