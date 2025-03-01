import express, { Request, Response } from "express";
import { auth } from "../middleware/auth";
import Note from "../models/notesModel";
import { INotePostBody } from "../types/notes";
import { User as UserType } from "../types/user";

const router = express.Router();
interface AuthRequest extends Request<{}, {}, INotePostBody> {
  user?: UserType;
}

router.post("/", auth, async (req: AuthRequest, res: Response) => {
  const { title, content } = req.body;
  const user: any = req?.user;
  const note = new Note({
    title,
    content,
    collaborators: [user._id],
    author: user._id,
  });
  await note.save();
  res.status(201).json(note);
});

router.get("/", auth, async (req: Request, res: Response) => {
  const { user }: any = req;
  const notes = await Note.find({ author: user._id });
  res.status(200).json(notes);
});

router.get("/:id", auth, async (req: Request, res: Response) => {
  const { id } = req.params;
  const note = await Note.findById(id).lean();
  if (!note) {
    return res.status(404).json({ message: "Note not found" });
  }
  res.status(200).json(note);
});

export default router;
