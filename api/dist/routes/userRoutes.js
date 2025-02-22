"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userModel_1 = __importDefault(require("../models/userModel"));
const auth_1 = require("../middleware/auth");
const error_handling_1 = __importDefault(require("../classes/error-handling"));
const router = express_1.default.Router();
// Create a new user (signup)
router.post("/", async (req, res) => {
    try {
        const { password, email } = req.body;
        const userExists = await userModel_1.default.findOne({ email });
        if (userExists) {
            throw new error_handling_1.default("User already exists", 400);
        }
        const salt = await bcryptjs_1.default.genSalt(10);
        const hashedPassword = await bcryptjs_1.default.hash(password, salt);
        const user = new userModel_1.default({ ...req.body, password: hashedPassword });
        const newUser = await user.save();
        // const userResponse: UserResponse = {
        //   _id: savedUser._id,
        //   username: savedUser.username,
        //   firstName: savedUser.firstName,
        //   lastName: savedUser.lastName,
        //   email: savedUser.email,
        //   age: savedUser.age || 0,
        // };
        res.status(201).json(newUser);
        // res.status(201).json({ message: "User created successfully" });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
// Protected routes - require authentication
router.get("/", auth_1.auth, async (req, res) => {
    try {
        const users = await userModel_1.default.find().select("-password");
        res.json(users);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.get("/:id", auth_1.auth, async (req, res) => {
    try {
        const user = await userModel_1.default.findById(req.params.id).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
router.put("/:id", auth_1.auth, async (req, res) => {
    try {
        const { password, ...updateData } = req.body;
        const user = await userModel_1.default.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
        }).select("-password");
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.delete("/:id", auth_1.auth, async (req, res) => {
    try {
        const user = await userModel_1.default.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.default = router;
