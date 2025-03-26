import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { FaArrowLeft, FaUserCircle } from 'react-icons/fa';

function Usuario() {
  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#faf3fa] to-[#90dffe] pb-32">
      {/* Círculos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-30px] right-[-30px] w-36 h-36 bg-pink-300 rounded-full opacity-30" />
        <div className="absolute bottom-10 right-10 w-44 h-44 bg-blue-200 rounded-full opacity-80" />
        <div className="absolute top-1/3 left-[-20px] w-40 h-40 bg-blue-300 rounded-full opacity-80" />
      </div>

      <div className="relative z-10 px-4 py-6 sm:px-10 sm:py-10 flex flex-col items-center space-y-6 flex-grow">
        <div className="w-full flex items-center">
          <FaArrowLeft
            className="text-xl sm:text-2xl mr-3 cursor-pointer"
            onClick={() => navigate('/')}
          />
          <h1 className="text-xl sm:text-2xl font-semibold">Perfil</h1>
        </div>

        <FaUserCircle className="text-[80px] sm:text-[120px] text-gray-700 mt-4" />

        <div className="text-center w-full max-w-sm">
          <p className="text-sm text-gray-500">Nombre Admin</p>
          <div className="bg-blue-100 px-6 py-2 mt-1 rounded-full shadow-md font-semibold text-blue-700 text-base sm:text-lg">
            CItaly
          </div>
        </div>

        <div className="text-center w-full max-w-sm">
          <p className="text-sm text-gray-500">Nombre Establecimiento</p>
          <div className="bg-yellow-200 px-6 py-2 mt-1 rounded-full shadow-md font-semibold text-yellow-800 text-base sm:text-lg">
            CCOFFEV
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Usuario;
