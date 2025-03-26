import express from 'express';
import { obtenerHistorial, agregarRegistro } from '../controllers/historialController.js';

const router = express.Router();

router.get('/', obtenerHistorial);
router.post('/', agregarRegistro);

export default router;
