import mongoose from 'mongoose';

const historialSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
    unique: true
  },
  total: {
    type: Number,
    required: true
  }
});

const Historial = mongoose.model('Historial', historialSchema);
export default Historial;
