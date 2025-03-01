"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../api/notes";
import Editor from "../components/notes/Editor";
interface NoteProps {
  id: string;
  title: string;
  content: string;
}

export const Note: React.FC<NoteProps> = ({ id, title, content }) => {
  const [note, setNote] = useState<NoteProps | null>(null);
  const params = useParams();
  console.log(params);
  useEffect(() => {
    const fetchNote = async () => {
      if (params.id) {
        const note = await getNote(params.id);
        setNote(note);
      }
    };

    fetchNote();
  }, [params.id]);

  return (
    <div className="flex flex-col gap-4 h-full">
      <h1 className="text-2xl font-bold">Note {id}</h1>
      <div className="flex flex-1 gap-2">
        <Editor content={note?.content ?? "hello"} />
      </div>
    </div>
  );
};

export default Note;
