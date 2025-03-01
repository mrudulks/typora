import colors from "tailwindcss/colors";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F8FAFC", // Light mode primary background
          dark: "#222831",  // Dark mode primary background
        },
        secondary: {
          light: "#E2E8F0", // Soft gray for light mode
          dark: "#31363F",  // Dark gray for dark mode
        },
        accent: {
          light: "#38BDF8", // Sky Blue for light mode
          dark: "#0EA5E9",  // Slightly darker blue for dark mode
        },
        text: "#76ABAE",
        muted: {
          light: "#94A3B8", // Soft muted text color
          dark: "#64748B",  // Darker muted text for dark mode
        },
        border: {
          light: "#CBD5E1", // Light border for light mode
          dark: "#475569",  // Darker border for dark mode
        },
      },
    },
  },
  plugins: [],
};
