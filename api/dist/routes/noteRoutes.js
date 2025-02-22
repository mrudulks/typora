"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../middleware/auth");
const notesModel_1 = __importDefault(require("../models/notesModel"));
const router = express_1.default.Router();
router.post('/', auth_1.auth, async (req, res) => {
    const { title, content, collaborators } = req.body;
    console.log(req);
    const note = new notesModel_1.default({ title, content });
    await note.save();
    res.status(201).json(note);
});
router.get('/', auth_1.auth, async (req, res) => {
    const { user } = req;
    const notes = await notesModel_1.default.find({ author: user._id });
    res.status(200).json(notes);
});
exports.default = router;
