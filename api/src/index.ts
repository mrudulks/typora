import express, { NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRoutes from './routes/index';
import session from 'express-session';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/notesio';

// Middleware
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}), (req, res, next) => {
  console.log('Incoming request URL:', req.url);
  next();
});
app.use(express.json());

// Add before routes
// app.use(session({
//   secret: process.env.SESSION_SECRET || 'fallback_session_secret',
//   resave: false,
//   saveUninitialized: false,
//   cookie: { secure: true }
// }));

// Routes
app.use('/api', apiRoutes);

// MongoDB Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });