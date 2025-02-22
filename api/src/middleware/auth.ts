import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import { User as UserType } from '../types/user';

interface AuthRequest extends Request {
  user?: UserType;
}

export const auth = async (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret') as { userId: string };
    const user = await User.findById(decoded.userId).select('-password').lean();
    if (!user) {
      throw new Error();
    }
    req.user = user as unknown as UserType;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate' });
  }
};
