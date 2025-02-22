import express from 'express';
import userRoutes from './userRoutes';
import authRoutes from './authRoutes';
import noteRoutes from './noteRoutes';

const router = express.Router();

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/notes', noteRoutes);

export default router;
