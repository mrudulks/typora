import React, { useState } from "react";
import { motion } from "framer-motion";
import Avatar from "./Avatar";

const Dropdown: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }

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
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg"
                >
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Profile</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Logout</a>
                </motion.div>
            )}
        </div>
    );
};

export default Dropdown;
