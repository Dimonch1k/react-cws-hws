import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const current = theme === "light" ? "dark" : "light";
    setTheme(current);
    document.body.className = `theme-${current}`;
  };

  useEffect(() => {
    const current = localStorage.getItem("theme") || "dark";
    setTheme(current);
    document.body.className = `theme-${current}`;
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
