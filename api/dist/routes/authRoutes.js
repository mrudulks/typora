"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const auth_1 = require("../middleware/auth");
// import cookieParser from 'cookie-parser';
const router = express_1.default.Router();
// Login endpoint
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        // Find user by email
        const user = await userModel_1.default.findOne({ email }).lean();
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }
        // Check password
        const isValidPassword = await bcryptjs_1.default.compare(password, user.password);
        // if (!isValidPassword) {
        //   return res.status(401).json({ message: 'Invalid email or password' });
        // }
        // Generate JWT token
        const accessToken = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '24h' });
        const refreshToken = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET || "fallback_refresh_secret", { expiresIn: "7d" });
        res.cookie('access', accessToken, {
            secure: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.cookie('refresh', refreshToken, {
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        // req?.user = user;
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
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get('/me', auth_1.auth, async (req, res) => {
    try {
        console.log("req", req?.user);
        // if (!req.user) {
        //   return res.status(401).json({ message: 'Not authenticated' });
        // }
        // const user = await User.findById(req.user._id).select('-password').lean();
        // if (!user) {
        //   return res.status(404).json({ message: 'User not found' });
        // }
        const user = await userModel_1.default.findOne().select('-password').lean();
        res.json({ user, isLoggedIn: true });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.post('/refresh', async (req, res) => {
    const { refresh } = req.body;
    if (!refresh) {
        return res.status(401).json({ message: 'No refresh token provided' });
    }
    jsonwebtoken_1.default.verify(refresh, process.env.JWT_REFRESH_SECRET || 'fallback_refresh_secret', async (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }
        const user = await userModel_1.default.findOne({ _id: decoded.userId }).lean();
        if (!user) {
            return res.status(401).json({ message: 'Invalid refresh token' });
        }
        const accessToken = jsonwebtoken_1.default.sign({ userId: user._id }, process.env.JWT_SECRET || 'fallback_secret', { expiresIn: '24h' });
        res.json({ access: accessToken });
    });
});
router.post("/logout", (req, res) => {
    res.clearCookie("access");
    res.clearCookie("refresh");
    res.json({ message: "Logged out successfully" });
});
exports.default = router;
