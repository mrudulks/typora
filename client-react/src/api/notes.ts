import { api } from "../lib/api";

export const getNotes: () => Promise<any[]> = async () => {
  const response: any[] = await api.get("/notes");
  return response;
};

export const createNote: (
  title: string,
  content?: string,
  collaborators?: string[]
) => Promise<any> = async (title, content, collaborators) => {
  const response: any = await api.post("/notes", {
    title,
    content,
    collaborators,
  });
  return response;
};

export const getNote: (id: string) => Promise<any> = async (id) => {
  const response: any = await api.get(`/notes/${id}`);
  return response;
};
