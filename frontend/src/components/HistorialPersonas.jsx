import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import myImage from "../assets/4.png";
import axios from "axios";

const meses = [
  "ENE",
  "FEB",
  "MAR",
  "ABR",
  "MAY",
  "JUN",
  "JUL",
  "AGO",
  "SEP",
  "OCT",
  "NOV",
  "DIC",
];

function HistorialPersonas() {
  const [mesSeleccionado, setMesSeleccionado] = useState(3);
  const [history, setHistory] = useState([]);
  const locationId = "67e41e1a961ae2823a91266d";
  const year = 2025;

  const obtenerDatos = async (month) => {
    try {
      const response = await axios.get(
        `http://localhost:5002/api/location/${locationId}/history/${month}/${year}`
      );
      console.log(response.data);
      setHistory(response.data);
    } catch (error) {
      console.log(error);
      setHistory([]);
    }
  };

  const refreshFilter = async (month) => {
    setMesSeleccionado(month);
    obtenerDatos(month);
  };

  useEffect(() => {
    obtenerDatos(mesSeleccionado);
  }, []);

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${myImage})`, backgroundSize: "cover" }}
    ><header className="flex items-center justify-end p-4 text-black">
    <h1 className="text-2xl font-bold">SafeCount</h1>
  </header>

        <h2 className="text-4xl sm:text-6xl font-bold text-center mb-4">
          Historial
        </h2>

        <div className="flex flex-wrap justify-center gap-3 text-lg font-semibold text-indigo-700 mb-6">
          {meses.map((mes, idx) => (
            <button
              key={mes}
              onClick={() => refreshFilter(idx + 1)}
              className={`px-3 py-1 rounded-md transition ${
                mesSeleccionado === idx + 1
                  ? "bg-indigo-600 text-white"
                  : "hover:bg-indigo-200"
              }`}
            >
              {mes}
            </button>
          ))}
        </div>

        <div>
          {history.length === 0 ? (
            <p>No se encontraron datos para el mes seleccionado.</p>
          ) : (
            history.map((entry, index) => (
              <div key={index}>
                <ul>
                  {entry.actions.map((action, idx) => (
                    <li key={idx}>
                        <div className="bg-white p-1 rounded-lg shadow-lg m-5">
                          <h2 className="text-2xl font-semibold mb-4">
                            Fecha
                          </h2>
                          <div className="text-lg font-mono text-gray-700">
                            {new Date(action.timestamp).toLocaleString()}
                          </div>
                        </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      

      <Navbar />
    </div>
  );
}

export default HistorialPersonas;
