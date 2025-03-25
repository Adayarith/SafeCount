import React from 'react';
import Navbar from './Navbar';


function Dashboard() {
  return (
    <div className="relative flex flex-col min-h-screen ">
    {/* Fondo decorativo  Círculos */}
    <div className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#faf3fa] to-[#90dffe]">
      <div className="absolute top-[-50px] right-[-30px] w-40 h-40 bg-yellow-300 rounded-full opacity-50" />
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-200 rounded-full opacity-80" />
      <div className="absolute top-1/3 left-[-20px] w-48 h-48 bg-blue-300 rounded-full opacity-80" />
    </div>
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
    >
     
    <div className="bg-gray-100 min-h-screen flex flex-col">

      <div className="flex justify-end mr-4 relative z-10 flex-grow"> 
        <img
          src="/src/assets/usuario.png"
          alt="Logo de la aplicación"
          className="h-20"
        />
      </div>

      <div>
        <h4 className="text-xl sm:text-3xl ml-10 sm:ml-60 mb-0.5">Buen Día</h4>
        <h2 className="text-xl sm:text-4xl ml-10 sm:ml-60 font-semibold mt-0.5 mb-8">CITLALY</h2>
      </div>

      <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
        <div className="w-full sm:w-[900px] h-auto sm:h-[300px] bg-white rounded-2xl translate-y-[-100px] sm:translate-y-[-180px] shadow-lg">
          <div className="bg-white rounded-t-2xl p-4">
            <p className="text-lg sm:text-xl mb-1 font-semibold text-center">
              # Personas Actuales en CCOFFEY
            </p>
            <p className="text-4xl sm:text-6xl font-bold text-center mb-10 sm:mb-10">80</p>
          </div>

          <div className="bg-gradient-to-r from-blue-400 to-purple-500 mb-1 rounded-b-2xl p-6 sm:p-8 h-auto sm:h-[160px]">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg sm:text-2xl text-white font-semibold mb-1">Hora : 14:30 PM</p>
                <p className="text-lg text-white">05/03/2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-lg sm:text-3xl font-semibold translate-y-[-80px] sm:translate-y-[-280px] text-gray-600 ml-4 sm:ml-20">
  CAPACIDAD MAXIMA ESTABLECIDA
</h1>

<div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
  <div className="w-full sm:w-[600px] h-auto sm:h-[120px] bg-white rounded-2xl shadow-lg transform translate-y-[-250px] sm:translate-y-[-500px] p-4">
    <div className="bg-white rounded-t-2xl p-4">
      <div className="flex justify-between items-center mt-4">
        <p className="text-4xl font-bold">250</p>
        <p className="text-lg text-gray-400">personas</p>
      </div>
    </div>
    <div className="flex justify-end mt-8"> 
      <button className="bg-yellow-200 rounded-full py-2 px-20 sm:px-20 shadow-8xl ">
        Editar
      </button>
    </div>
</div>
<div className="flex justify-between items-center sm:translate-y-[-200px] p- ml-[-300px]">
  <div className="bg-pink-100 rounded-full w-60 mr-40 h-60 flex items-center justify-center ml-[-300px]">
    <p className="text-5xl font-bold ">170</p>
  </div>
  <div>
            <p className="text-xl font-semibold ">Estado</p>
            <p className="text-blue-500 font-semibold">Espacio Disponible</p>
          </div>
          </div>
    </div>
      <Navbar />
    </div>
    </div>
    </div>
  );
}

export default Dashboard;