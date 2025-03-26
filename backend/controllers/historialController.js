import Historial from '../models/Historial.js';

export const obtenerHistorial = async (req, res) => {
  try {
    const historial = await Historial.find().sort({ fecha: -1 });
    res.json(historial);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el historial' });
  }
};

export const agregarRegistro = async (req, res) => {
  const { fecha, total } = req.body;

  if (!fecha || !total) {
    return res.status(400).json({ error: 'Fecha y total son requeridos' });
  }

  try {
    const nuevo = new Historial({ fecha, total });
    await nuevo.save();
    res.json({ success: true, data: nuevo });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: 'Ya existe un registro con esta fecha' });
    }
    res.status(500).json({ error: 'Error al guardar el registro' });
  }
};
