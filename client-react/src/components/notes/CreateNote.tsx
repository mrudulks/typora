"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { Modal } from "../ui/Modal";
import { PlusIcon } from "lucide-react";
import { createNote } from "../../api/notes";

export const CreateNote: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const toggleModal = (isOpen: boolean, toggle: () => void) => {
    setIsOpen(isOpen);
    toggle();
  };

  const handleRegister = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      if (!title) {
        setError("Title is required");
        return;
      }
      setLoading(true);
      setError(null);
      await createNote(title);
      setIsOpen(false);
      setTitle("");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal
        activator={
          <Button className="flex gap-2 items-center">
            <PlusIcon className="w-4 h-4" />
            Create Note
          </Button>
        }
        onToggle={(isOpen, toggle) => toggleModal(isOpen, toggle)}
        content={
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                Create your account
              </h2>
            </div>

            <div className="mt-4">
              <div className="">
                <form className="space-y-6" onSubmit={handleRegister}>
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded">
                      {error}
                    </div>
                  )}

                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm font-semibold text-text"
                    >
                      Title
                    </label>
                    <input
                      id="title"
                      type="text"
                      required
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-text focus:outline-none focus:ring-text"
                    />
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button type="button" onClick={() => setIsOpen(false)}>
                      Cancel
                    </Button>
                    <Button type="submit" disabled={loading}>
                      {loading ? "Creating..." : "Create"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};
