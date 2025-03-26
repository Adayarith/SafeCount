import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import myImage from '../assets/4.png';

const meses = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

function HistorialPersonas() {
  const [data, setData] = useState([]);
  const [mesSeleccionado, setMesSeleccionado] = useState(null);
  const [filtrado, setFiltrado] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const respuesta = await fetch('http://localhost:5000/api/historial');

        const resultado = await respuesta.json();
        setData(resultado);
      } catch (error) {
        // Fallback si no tienes la API aún
        setData([
          { fecha: "2021-05-12", total: 128 },
          { fecha: "2021-05-11", total: 92 },
          { fecha: "2021-05-11", total: 216 },
          { fecha: "2021-05-09", total: 250 },
          { fecha: "2021-05-08", total: 234 },
          { fecha: "2021-06-01", total: 100 },
        ]);
      }
    };

    obtenerDatos();
  }, []);

  useEffect(() => {
    if (mesSeleccionado !== null) {
      const filtradoPorMes = data.filter(item => {
        const fecha = new Date(item.fecha);
        return fecha.getMonth() === mesSeleccionado;
      });
      setFiltrado(filtradoPorMes);
    }
  }, [mesSeleccionado, data]);

  const formatearFecha = (fechaStr) => {
    const fecha = new Date(fechaStr);
    return fecha.toDateString();
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${myImage})`, backgroundSize: 'cover' }}
    >
      <header className="flex items-center justify-end p-4 sm:p-8 text-black mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold shadow-xl shadow-fuchsia-300">SafeCount</h1>
      </header>

      <div className="bg-gradient-to-b from-purple-400 to-pink-200 rounded-2xl p-4 sm:p-10 w-[90%] sm:w-[600px] mx-auto">
        <h2 className="text-4xl sm:text-6xl text-red-50 font-extrabold text-center mb-4">Historial</h2>

        <div className="flex flex-wrap justify-center gap-3 text-lg font-semibold text-indigo-700 mb-6">
          {meses.map((mes, idx) => (
            <button
              key={mes}
              onClick={() => setMesSeleccionado(idx)}
              className={`px-3 py-1 rounded-md transition ${
                mesSeleccionado === idx ? 'bg-indigo-600 text-white' : 'hover:bg-indigo-200'
              }`}
            >
              {mes}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtrado.length > 0 ? (
            filtrado.map((item, index) => (
              <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-sm">
                <p className="text-gray-600 font-bold text-lg sm:text-xl">Total</p>
                <p className="text-gray-800 text-lg sm:text-xl">{formatearFecha(item.fecha)}</p>
                <p className="text-blue-500 font-bold text-lg sm:text-xl">{item.total} Personas</p>
              </div>
            ))
          ) : (
            <p className="text-center text-white font-semibold">Selecciona un mes para ver datos.</p>
          )}
        </div>
      </div>

      <Navbar />
    </div>
  );
}

export default HistorialPersonas;
