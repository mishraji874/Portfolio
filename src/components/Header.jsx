import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-2xl font-bold"
                        style={{ color: theme.colors.text }}
                    >
                        Portfolio
                    </motion.div>
                    <div className="flex items-center space-x-6">
                        <a
                            href="#about"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            About
                        </a>
                        <a
                            href="#skills"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            Skills
                        </a>
                        <a
                            href="#projects"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            Contact
                        </a>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                        >
                            {theme.isDark ? '🌞' : '🌙'}
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};
