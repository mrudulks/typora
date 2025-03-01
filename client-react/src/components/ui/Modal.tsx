"use client";
import { useState } from "react";
import Button from "./Button";

interface ModalProps {
  activator?: React.ReactNode;
  content?: React.ReactNode;
  onToggle?: (isOpen: boolean, toggle: () => void) => void;
}

export const Modal: React.FC<ModalProps> = ({
  activator,
  content,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    if (onToggle) {
      onToggle(!isOpen, toggleModal);
    }
  };

  return (
    <>
      {activator && <div onClick={toggleModal}>{activator}</div>}
      {!activator && <Button onClick={toggleModal}>Modal</Button>}

      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center p-4 bg-gray-500 bg-opacity-75">
          <div className="relative w-full max-w-lg bg-white rounded-lg shadow-xl sm:my-8">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">{content}</div>
            {/* <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div> */}
          </div>
        </div>
      )}
    </>
  );
};
