'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle({ 
    lightBg,
    darkBg,
    darkBgDark,
    darkBgLight,
    lightText,
    darkText,
    darkTextDark,
    darkTextLight
}) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);
  
  const toggleTheme = (props) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    window.dispatchEvent(new Event('themeChange'));
  };

  return (
    <>
        <div className="flex items-start">
            <button onClick={toggleTheme} className={`flex gap-3 flex-col p-3 shadow-custom-toggle ${lightBg} ${darkBgDark} relative`}>
                <span className={`${darkText} relative z-10`}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="feather feather-moon">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                </span>
                <span className={`${darkBg} ${darkBgLight} rounded-md w-[30px] h-[30px] dark:top-2 top-[39px] left-1/2 -translate-x-1/2 absolute transition-all duration-300`}></span>
                <span className={`${lightText} ${darkTextLight} relative z-10`}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className={`feather feather-sun`}>
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" y1="1" x2="12" y2="3"/>
                            <line x1="12" y1="21" x2="12" y2="23"/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1="1" y1="12" x2="3" y2="12"/>
                            <line x1="21" y1="12" x2="23" y2="12"/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                </span>
            </button>
        </div>
    </>
  );
}