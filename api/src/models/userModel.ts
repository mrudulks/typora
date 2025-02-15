import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age?: number;
}

const userSchema = new mongoose.Schema<IUser>({
  username: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number, required: false },
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

export default mongoose.model<IUser>('User', userSchema);