import express, { Request, Response, RequestHandler, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';
import { auth } from '../middleware/auth';
import { User as UserType } from '../types/user';
// import cookieParser from 'cookie-parser';



const router = express.Router();

// Login endpoint
router.post('/login', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user: any = await User.findOne({ email }).lean();
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Check password
    const isValidPassword = await bcrypt.compare(password, user.password);
    // if (!isValidPassword) {
    //   return res.status(401).json({ message: 'Invalid email or password' });
    // }

    // Generate JWT token
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );
    const refreshToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || "fallback_refresh_secret",
      { expiresIn: "7d" }
    );

    res.cookie('access', accessToken, {
      secure: true,
      maxAge: 24 * 60 * 60 * 1000
    });
    res.cookie('refresh', refreshToken, {
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    });

    req.params.user = user;
    res.json({
      isLoggedIn: true,
      access: accessToken,
      refresh: refreshToken,
      user: {
        id: user._id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      }
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

// Get user info
router.get('/me', auth, (async (req: Request, res: Response) => {
  try {
    const { user }: any = req;
    console.log("user in me", user);
    const userDetails: any = await User.findOne().select('-password').lean();
    res.json({ user: userDetails, isLoggedIn: true });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}));

// Refresh token
router.post('/refresh', (async (req: Request, res: Response) => {
  const { refresh } = req.body;
  if (!refresh) {
    return res.status(401).json({ message: 'No refresh token provided' });
  }

  jwt.verify(refresh, process.env.JWT_REFRESH_SECRET || 'fallback_refresh_secret', async (err: any, decoded: any) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }
    const user = await User.findOne({ _id: decoded.userId }).lean();
    if (!user) {
      return res.status(401).json({ message: 'Invalid refresh token' });
    }
    const accessToken = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );
    res.json({ access: accessToken });
  });
}));

// Logout
router.post("/logout", (req: Request, res: Response) => {
  res.clearCookie("access");
  res.clearCookie("refresh");
  res.json({ message: "Logged out successfully" });
});
export default router;