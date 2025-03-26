import { useState } from "react";
import Navbar from "./Navbar";

const ConfigScreen = () => {
  const [capacity, setCapacity] = useState("");
  const [notifications, setNotifications] = useState(false);
  const [configs, setConfigs] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleCapacityChange = (e) => {
    setCapacity(e.target.value);
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
  };

  const handleSubmit = () => {
    if (editingIndex !== null) {
      const updatedConfigs = configs.map((config, index) =>
        index === editingIndex ? { capacity, notifications } : config
      );
      setConfigs(updatedConfigs);
      setEditingIndex(null);
    } else {
      const newConfig = { capacity, notifications };
      setConfigs([...configs, newConfig]);
    }
    setCapacity("");
    setNotifications(false);
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setCapacity(configs[index].capacity);
    setNotifications(configs[index].notifications);
  };

  return (
    <div className="relative flex flex-col bg-gradient-to-b from-[#faf3fa] to-[#90dffe] min-h-screen pb-32">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-50px] right-[-30px] w-40 h-40 bg-yellow-300 rounded-full opacity-90" />
        <div className="absolute bottom-10 right-10 w-52 h-52 bg-violet-300 rounded-full opacity-80" />
        <div className="absolute top-1/3 left-[-20px] w-48 h-48 bg-blue-300 rounded-full opacity-80" />
      </div>

      <div className="relative z-10 flex-grow overflow-y-auto">
        <header className="flex items-center justify-end p-4 text-black">
          <h1 className="text-2xl font-bold">SafeCount</h1>
        </header>

        <main className="flex items-center justify-center p-4 flex-col space-y-8">
          <div className="w-full max-w-lg p-8 bg-white rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-center mb-6">
              {editingIndex === null ? "Configuración" : "Editar Configuración"}
            </h2>

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

            <div className="flex justify-center mt-4">
              <button
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                {editingIndex === null
                  ? "Guardar"
                  : "Actualizar Configuración"}
              </button>
            </div>
          </div>
        </main>

        <div className="flex flex-col items-center p-4 mt-8 space-y-6">
          <h3 className="text-xl font-semibold mb-4">Configuraciones Guardadas</h3>
          <ul className="w-full max-w-lg space-y-4">
            {configs.map((config, index) => (
              <li
                key={index}
                className="w-full p-4 bg-gray-200 rounded-lg flex justify-between items-center"
              >
                <div>
                  <p>
                    <strong>Capacidad:</strong> {config.capacity}
                  </p>
                  <p>
                    <strong>Notificaciones:</strong>{" "}
                    {config.notifications ? "Activadas" : "Desactivadas"}
                  </p>
                </div>
                <button
                  onClick={() => handleEdit(index)}
                  className="px-4 py-2 bg-yellow-400 text-white rounded-md"
                >
                  Editar
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default ConfigScreen;
