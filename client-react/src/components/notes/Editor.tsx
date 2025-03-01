"use client";
import React, { useState, useRef } from "react";
interface EditorProps {
  content: string;
}

const TextEditor: React.FC<EditorProps> = ({ content }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [fontSize, setFontSize] = useState("16px");
  const [fontWeight, setFontWeight] = useState("normal");

  const applyStyle = (command: string, value?: string) => {
    document.execCommand(command, false, value);
  };

  return (
    <div className="w-full border p-4 rounded-md">
      {/* Toolbar */}
      {/* <div className="flex gap-2 mb-2">
        <select
          value={fontSize}
          onChange={(e) => {
            setFontSize(e.target.value);
            applyStyle("fontSize", e.target.value);
          }}
          className="border p-1"
        >
          <option value="3">Small</option>
          <option value="4">Medium</option>
          <option value="5">Large</option>
        </select>

        <button
          onClick={() => {
            setFontWeight(fontWeight === "bold" ? "normal" : "bold");
            applyStyle("bold");
          }}
          className="border px-2 py-1"
        >
          Bold
        </button>

        <button
          onClick={() => applyStyle("insertOrderedList")}
          className="border px-2 py-1"
        >
          Ordered List
        </button>
        <button
          onClick={() => applyStyle("insertUnorderedList")}
          className="border px-2 py-1"
        >
          Unordered List
        </button>
      </div> */}

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        className="p-2 h-full rounded-md outline-none text-primary-dark dark:text-white"
        style={{ fontSize, fontWeight }}
      >
        {content}
      </div>
    </div>
  );
};

export default TextEditor;
