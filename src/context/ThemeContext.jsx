import React, { createContext, useContext, useState, useEffect, startTransition } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            startTransition(() => {
                setIsDark(savedTheme === 'dark');
            });
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            startTransition(() => {
                setIsDark(prefersDark);
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);

    const toggleTheme = () => {
        startTransition(() => {
            setIsDark(!isDark);
        });
    };

    const value = {
        isDark,
        toggleTheme,
        theme: {
            colors: {
                background: isDark ? '#0a192f' : '#ffffff',
                surface: isDark ? '#112240' : '#f3f4f6',
                text: isDark ? '#e2e8f0' : '#1f2937',
                textSecondary: isDark ? '#94a3b8' : '#4b5563',
                border: isDark ? '#1e293b' : '#e5e7eb',
                primary: '#64ffda',
                accent: {
                    DEFAULT: '#64ffda',
                    light: '#88ffea',
                    dark: '#3dffc9'
                },
                secondary: {
                    DEFAULT: '#8892b0',
                    light: '#a8b2d1',
                    dark: '#495670'
                }
            },
            fontSizes: {
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem'
            }
        }
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}; 