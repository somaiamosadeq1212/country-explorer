// it is a client component because it is user interactive
"use client";

import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme") || "light";

    setTheme(savedTheme);

    document.documentElement.classList.toggle(
      "dark",
      savedTheme === "dark"
    );
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded-lg bg-white text-black dark:bg-gray-800 dark:text-white border"
    >
      {theme === "dark"
        ? "☀️ Light"
        : "🌙 Dark"}
    </button>
  );
}