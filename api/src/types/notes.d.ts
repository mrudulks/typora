import mongoose from 'mongoose';

export interface NoteModel extends mongoose.Document {
    title: string;
    content?: string;
    author: mongoose.Schema.Types.ObjectId;
    collaborators?: mongoose.Schema.Types.ObjectId[];
}

export interface INotePostBody {
    title: string;
    content?: string;
    collaborators: mongoose.Schema.Types.ObjectId[];
}