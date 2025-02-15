import express, { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

const router = express.Router();

// Login endpoint
router.post('/login', async (req: Request, res: Response) => {
  try {
    console.log("req.body", req.body);
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email }).lean();
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    console.log("user", user, "password", password);
    const isValidPassword = await bcrypt.compare(password, user.password);
    // if (!isValidPassword) {
    //   return res.status(401).json({ message: 'Invalid email or password' });
    // }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch (error: any) {
    console.log("error", error);
    res.status(500).json({ message: error.message });
  }
});

export default router;