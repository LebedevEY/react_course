import { createContext, useState, useCallback } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children, themes, initialTheme }) => {
  const [theme, setTheme] = useState({
    theme: themes[initialTheme],
    name: "dark",
  });

  const changeTheme = useCallback(
    (name) => {
      if (themes[name]) {
        setTheme({ name, theme: themes[name] });
      }
    },
    [themes],
  );

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
