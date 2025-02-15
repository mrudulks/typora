import express, { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { UserPostBody, UserResponse } from "../types/user";
import User from "../models/userModel";
import { auth } from "../middleware/auth";
import AppError from "../classes/error-handling";
const router = express.Router();

// Create a new user (signup)
router.post("/", async (req: Request<{}, {}, UserPostBody>, res: Response) => {
  try {
    const { password, email } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new AppError("User already exists", 400);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = new User({ ...req.body, password: hashedPassword });
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
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

// Protected routes - require authentication
router.get("/", auth, async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/:id", auth, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    const { password, ...updateData } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    }).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
