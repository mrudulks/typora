import express, { Request, Response } from 'express';
import { auth } from '../middleware/auth';
import Note from '../models/notesModel';
import { INotePostBody } from '../types/notes';
const router = express.Router();

router.post('/', auth, (async (req: Request<{}, {}, INotePostBody>, res: Response) => {
    const { title, content, collaborators } = req.body;
    const user: any = req?.user;
    const note = new Note({ title, content, collaborators: [...collaborators, user._id], author: user._id });
    await note.save();
    res.status(201).json(note);
}));

router.get('/', auth, async (req: Request, res: Response) => {
    const { user }: any = req;
    const notes = await Note.find({ author: user._id });
    res.status(200).json(notes);
});


export default router;