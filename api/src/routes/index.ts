import express from "express";
import { auth } from "../middleware/auth";
import userRoutes from "./userRoutes";
import authRoutes from "./authRoutes";
import noteRoutes from "./noteRoutes";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/notes", auth, noteRoutes);

export default router;
