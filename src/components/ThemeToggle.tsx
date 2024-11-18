import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors duration-200
        bg-light-card dark:bg-dark-card hover:bg-gray-100 dark:hover:bg-dark-lighter"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-light-text dark:text-dark-text" />
      ) : (
        <Sun className="w-5 h-5 text-light-text dark:text-dark-text" />
      )}
    </button>
  );
};

export default ThemeToggle;