// authController.js
import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const register = async (req, res) => {
  const { nombre, email, password } = req.body; // ✅ ¡agregado!
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'Usuario ya existe' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ nombre, email, password: hashedPassword }); // ✅ incluye nombre
    await newUser.save();

    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (err) {
    console.error(err); // deja esto para ver errores
    res.status(500).json({ message: 'Error en el servidor' });
  }
};



export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ message: 'Contraseña incorrecta' });

    res.status(200).json({ email: user.email, nombre: user.nombre });
  } catch (err) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};