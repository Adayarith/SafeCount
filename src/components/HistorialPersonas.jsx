import React from 'react';
import Navbar from './Navbar';
import myImage from '../assets/4.png'; 


const data = [
  { date: "Tue 12.05.2021", total: 128 },
  { date: "Mon 11.05.2021", total: 92 },
  { date: "Mon 11.05.2021", total: 216 },
  { date: "Sat 09.05.2021", total: 250 },
  { date: "Fri 08.05.2021", total: 234 },
  { date: "Mon 11.05.2021", total: 75 },
];

function HistorialPersonas() {
  return (
    <div
    className="flex flex-col min-h-screen bg-cover bg-center"
    style={{ backgroundImage: `url(${myImage})`, backgroundSize: 'cover' }} 
  >
    <header className="flex items-center justify-end p-8 bg-transparent text-black mb-10 ">
      <h1 className="text-5xl font-bold shadow-xl shadow-fuchsia-300">SafeCount</h1>
    </header>

      
      <div className="bg-gradient-to-b from-purple-400 to-pink-200 rounded-2xl p-4 sm:p-20 w-[600px] mx-auto">
        <h2 className="text-7xl text-red-50  font-extrabold text-center mt-2">Historial</h2>
        
        <div className="flex justify-center space-x-2 text-lg font-semibold text-indigo-600 mt-2">
          <span>ENE</span>
          <span>FEB</span>
          <span>MAR</span>
          <span>ABR</span>
          <span>MAY</span>
        </div>

        <div className="mt-4 space-y-5">
          {data.map((item, index) => (
            <div key={index} className="bg-gray-100 p-3 rounded-lg shadow-sm">
              <p className="text-gray-600 font-bold text-xl">Total</p>
              <p className="text-gray-800 text-xl">{item.date}</p>
              <p className="text-blue-500 font-bold text-xl">{item.total} Personas</p>
            </div>
          ))}
        </div>
      </div>

      
      <Navbar />
    </div>
  );
};

export default HistorialPersonas;