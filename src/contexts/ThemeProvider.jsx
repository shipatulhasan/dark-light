import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const rootElement = window.document.documentElement;

    if (theme) {
      rootElement.classList.remove("light");
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.add("light");
      rootElement.classList.remove("dark");
    }

    // ** get the theme from the local storage

    const storedTheme = JSON.parse(localStorage.getItem("theme"));

    setTheme(storedTheme);
  }, [theme]);

  const toogleTheme = () => {
    setTheme(!theme);

    // ** set the theme to ls

    localStorage.setItem("theme", !theme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toogleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
