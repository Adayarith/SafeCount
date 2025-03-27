import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import axios from 'axios';
import { LocationStatus } from '../types/types';


function Dashboard() {
  const navigate = useNavigate();
  const [status, setStatus] = useState<LocationStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userName, setUserName] = useState('');
  const locationId='67e41e1a961ae2823a91266d';

  useEffect(() => {
    // Fetch the status from the API when the component mounts
    const fetchStatus = async () => {
      try {
        const response = await axios.get(`http://localhost:5002/api/location/${locationId}/status`);
        setStatus(response.data);
        localStorage.setItem("location", response.data.name);
      } catch (err) {
        setError('Failed to fetch location status');
        console.error(err);
      }
    };

    setUserName(localStorage.getItem("username"));

    fetchStatus();
  }, [locationId]);

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-b from-[#faf3fa] to-[#90dffe] pb-32">
      {/* Círculos decorativos */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-50px] right-[-30px] w-40 h-40 bg-yellow-300 rounded-full opacity-50" />
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-blue-200 rounded-full opacity-80" />
        <div className="absolute top-1/3 left-[-20px] w-48 h-48 bg-blue-300 rounded-full opacity-80" />
      </div>

      <div className="relative z-10 px-4 sm:px-10">
        {/* Icono usuario */}
        <div className="flex justify-end">
          <img
            src="/src/assets/usuario.png"
            alt="Usuario"
            className="h-16 sm:h-20 cursor-pointer"
            onClick={() => navigate('/perfil')}
          />
        </div>

        <div className="mt-2">
          <h4 className="text-xl sm:text-3xl">Buen Día</h4>
          <h2 className="text-2xl sm:text-4xl font-semibold">{userName}</h2>
        </div>

        <div className="flex justify-center mt-6">
          <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg">
            <div className="p-6 text-center">
              <p className="text-lg sm:text-xl font-semibold">
                # Personas Actuales en { status?.name }
              </p>
              <p className="text-4xl sm:text-6xl font-bold mt-2">{status?.currentCount}</p>
            </div>
            <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-b-2xl p-6 text-white">
              <p className="text-lg sm:text-2xl font-semibold">Hora : {new Date().toLocaleTimeString()}</p>
              <p className="text-sm sm:text-lg">{new Date().toDateString()}</p>
            </div>
          </div>
        </div>

        <h1 className="text-lg sm:text-2xl font-semibold text-gray-600 mt-10 text-center">
          CAPACIDAD MÁXIMA ESTABLECIDA
        </h1>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-6">
          <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-md">
            <div className="flex justify-between items-center">
              <p className="text-3xl sm:text-4xl font-bold">{status?.maxCapacity}</p>
              <p className="text-base sm:text-lg text-gray-400">personas</p>
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => navigate('/config')}
                className="bg-yellow-200 rounded-full px-6 py-2 font-semibold shadow-md"
              >
                Editar
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="bg-pink-100 w-40 h-40 rounded-full flex items-center justify-center">
              <p className="text-4xl font-bold">{status?.maxCapacity-status?.currentCount}</p>
            </div>
            <p className="text-lg font-semibold mt-2">Estado</p>
            <p className="text-blue-500 font-semibold">Espacio Disponible</p>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default Dashboard;
