import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/auth";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setAlert({
        type: "error",
        message: "Todos los campos son obligatorios.",
      });
      return;
    }

    try {
      const response = await loginUser(email, password);
      setAlert({ type: "success", message: "¡Inicio de sesión exitoso!" });
      localStorage.setItem("username", response.data.nombre);
      localStorage.setItem("user", JSON.stringify(response.data));
      login(response.data);
      navigate("/");
      // Redirección o manejo de sesión aquí
    } catch (err) {
      const msg = err.response?.data?.message || "Error al iniciar sesión.";
      setAlert({ type: "error", message: msg });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-[#faf3fa] to-[#90dffe] px-4">
      {/* Círculos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-50px] right-[-50px] w-32 h-32 sm:w-40 sm:h-40 bg-yellow-300 rounded-full opacity-90" />
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-52 sm:h-52 bg-blue-200 rounded-full opacity-80" />
        <div className="absolute top-1/3 left-[-30px] w-36 h-36 sm:w-48 sm:h-48 bg-blue-300 rounded-full opacity-80" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 bg-white shadow-lg rounded-2xl p-6 sm:p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Inicio de Sesión
        </h2>

        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-20 pointer-events-none">
          <img src={logo} alt="Logo" className="w-32 sm:w-40" />
        </div>

        {alert && (
          <div
            className={`mb-4 text-sm text-center px-4 py-2 rounded-lg ${
              alert.type === "error"
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <label className="block text-gray-600">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 mb-4"
            placeholder="Ingrese su correo"
          />

          <label className="block text-gray-600">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-400 mb-6"
            placeholder="Ingrese su contraseña"
          />

          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 rounded-lg shadow-md transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="text-center text-gray-500 mt-4 text-sm">
          ¿Todavía no tienes cuenta?
        </p>
        <p className="text-center text-gray-500 text-sm">
          <Link to="/registro" className="text-blue-500 hover:underline">
            Registra tu cuenta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
