import React, { useEffect, useState } from "react";
import { getNotes } from "../api/notes";
import { CreateNote } from "../components/notes/CreateNote";
import { Outlet, useNavigate } from "react-router-dom";

// Component for the Notes page
export const Notes: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    getNotes().then((res) => {
      setNotes(res);
    });
  }, []);
  return (
    <>
      <div className="py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Notes</h1>
          {notes.length > 0 && <CreateNote />}
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 pt-8">
          {notes &&
            notes.map((note) => (
              <div
                onClick={() => {
                  navigate(`/notes/${note._id}`);
                }}
                className="border border-text rounded-md p-2"
                key={note._id}
              >
                <div className="h-72 w-full overflow-hidden">
                  {note.content ? (
                    note.content
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <p className="text-text text-sm">Click to add content</p>
                    </div>
                  )}
                </div>
                <h2 className="text-lg text-text font-bold capitalize">
                  {note.title}
                </h2>
              </div>
            ))}
        </div>
        {notes.length === 0 && (
          <div className="flex flex-col gap-2 justify-center items-center h-full">
            <p className="text-text text-sm">No notes found</p>
            <CreateNote />
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};
