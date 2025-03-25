import React from 'react';


function Navbar() {
  return (
    <nav className="bg-white p-2 shadow-md fixed bottom-0 left-0 w-full flex justify-around">
      <button aria-label="Menu" className="p-2 hover:bg-gray-100 rounded-md">
      <img src="/src/assets/application.png" alt="Logo de la aplicación" className="h-8" />
      </button>
      <button aria-label="Dashboard" className="p-2 hover:bg-gray-100 rounded-md">
      <img src="/src/assets/file.png" alt="Logo de la aplicación" className="h-8" />
      </button>
      <button aria-label="Settings" className="p-2 hover:bg-gray-100 rounded-md">
      <img src="/src/assets/configuraciones.png" alt="Logo de la aplicación" className="h-8" />
      </button>
    </nav>
  );
}

export default Navbar;