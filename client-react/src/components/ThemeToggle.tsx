import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-between gap-2">
      <p className="text-sm text-text">Theme</p>
      <div className="flex items-center border border-text rounded-xl p-1">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1 rounded-xl ${darkMode ? "bg-secondary-light dark:bg-secondary-dark text-text" : "bg-text text-secondary-light dark:text-secondary-dark"}`}>
          <Sun className="w-4 h-4" />
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-3 py-1 rounded-xl ${!darkMode ? "bg-gray-200 dark:bg-gray-700 text-text" : "bg-text text-secondary-light dark:text-secondary-dark"}`}>
          <Moon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ThemeToggle;
