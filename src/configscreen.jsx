import { useState } from "react";
import myImage from './assets/4.png'; 

const ConfigScreen = () => {
  const [capacity, setCapacity] = useState(250);
  const [notifications, setNotifications] = useState(false);

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${myImage})`, backgroundSize: 'cover' }} 
    >
      <header className="flex items-center justify-end p-4 bg-black bg-opacity-0 text-black">
        <h1 className="text-2xl font-bold">SafeCount</h1>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Configuracion</h2>

          <div className="mt-4 p-4 bg-pink-200 rounded-lg shadow-md">
            <label className="block text-lg font-semibold mb-2">
              Editar Capacidad
            </label>
            <input
              type="number"
              value={capacity}
              onChange={handleCapacityChange}
              className="w-full p-2 border rounded-lg text-center"
            />
          </div>

          <div className="mt-4 p-4 bg-blue-200 rounded-lg shadow-md">
            <label className="block text-lg font-semibold mb-2">
              Activar Notificaciones
              <br />
              <span className="text-sm">(cuando llegue cerca del límite)</span>
            </label>
            <div className="flex justify-center">
              <button
                onClick={toggleNotifications}
                className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 transition ${
                  notifications ? "bg-green-400" : ""
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow-md transform transition ${
                    notifications ? "translate-x-6" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-opacity-70 bg-white text-white text-center p-4">
        <p></p>
      </footer>
    </div>
  );
};

export default ConfigScreen;
