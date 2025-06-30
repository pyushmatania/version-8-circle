import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  currentGradient: number;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [currentGradient, setCurrentGradient] = useState(0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('circles-theme') as 'light' | 'dark';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('circles-theme', theme);
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  // Auto-cycle through gradient themes every 2.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % 4); // 4 total gradients (0-3)
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  // Apply current gradient to document
  useEffect(() => {
    document.documentElement.setAttribute('data-gradient', currentGradient.toString());
  }, [currentGradient]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentGradient }}>
      {children}
    </ThemeContext.Provider>
  );
};