import mongoose from 'mongoose';
import { NoteModel } from '../types/notes';
// 
// Note Model
const noteSchema = new mongoose.Schema<NoteModel>({
    title: { type: String, required: true },
    content: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    collaborators: { type: [mongoose.Schema.Types.ObjectId], ref: 'User' },
}, { timestamps: true });

export default mongoose.model<NoteModel>('Note', noteSchema);