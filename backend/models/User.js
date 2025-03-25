import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true }, // ← debe estar
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

export default mongoose.model('User', userSchema);
