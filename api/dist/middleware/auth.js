"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = __importDefault(require("../models/userModel"));
const auth = async (req, res, next) => {
    try {
        console.log("req", req);
        const token = req.header('Authorization')?.replace('Bearer ', '');
        if (!token) {
            throw new Error();
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET || 'fallback_secret');
        const user = await userModel_1.default.findById(decoded.userId).select('-password').lean();
        if (!user) {
            throw new Error();
        }
        // console.log("req", req.params);
        // req.user = user;
        next();
    }
    catch (error) {
        res.status(401).json({ message: 'Please authenticate' });
    }
};
exports.auth = auth;
