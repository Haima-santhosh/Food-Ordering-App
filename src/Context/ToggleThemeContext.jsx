

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ToggleThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'dark' : ''}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);


export const ToggleTheme = () => {
  const { toggleTheme, darkMode } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className="px-3 py-1 border rounded text-sm hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {darkMode ? '☀️ Light' : '🌙 Dark'}
    </button>
  );
};
