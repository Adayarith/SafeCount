import axios from 'axios';

const API_URL = 'http://localhost:5002/api/auth';

export const loginUser = async (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};

export const registerUser = async (email, password, nombre) => {
    return axios.post(`${API_URL}/register`, { nombre, email, password });
  };
  
