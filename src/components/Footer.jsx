import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
    const { theme } = useTheme();

    return (
        <footer className="bg-white dark:bg-gray-900 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center md:text-left mb-4 md:mb-0"
                    >
                        <p
                            className="text-lg font-bold mb-2"
                            style={{ color: theme.colors.text }}
                        >
                            Aditya Mishra
                        </p>
                        <p
                            className="text-sm"
                            style={{ color: theme.colors.textSecondary }}
                        >
                            Full Stack Web Developer & Smart Contract Security Researcher
                        </p>
                    </motion.div>

                    <div className="flex space-x-6">
                        <a
                            href="https://www.github.com/mishraji874"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://x.com/mishraji874_eth?t=KDJgecA4KOH_ucltIC8_Jw&s=09"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            Twitter
                        </a>
                        <a
                            href="https://telegram.me/mishraji63"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
                        >
                            Telegram
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p
                        className="text-sm"
                        style={{ color: theme.colors.textSecondary }}
                    >
                        © {new Date().getFullYear()} Aditya Mishra. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};