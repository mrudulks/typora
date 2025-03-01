import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Avatar from "./ui/Avatar";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const HeaderMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown}>
        <Avatar />
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 top-10 shadow-lg mt-2 w-48 px-2 py-2 bg-secondary-light dark:bg-secondary-dark rounded-lg"
        >
          <div className="flex flex-col divide-y divide-text">
            <div className="flex flex-col gap-2 py-1">
              <p className="text-text text-sm px-2 py-1">Notes</p>
              <p className="text-text text-sm px-2 py-1">Settings</p>
              <button
                onClick={logout}
                className="text-text flex gap-2 items-center text-sm px-2 py-1"
              >
                <LogOut className="h-4 w-4" />
                Sign out
              </button>
            </div>
            <div className="px-2 py-2">
              <ThemeToggle />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default HeaderMenu;
