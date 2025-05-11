import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Button } from '../common/Button';
import { Container } from '../layout/Container';
import { navItems } from '../../constants';

export const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-opacity-90 backdrop-blur-sm shadow-lg' : ''
                }`}
            style={{
                backgroundColor: theme.colors.background
            }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Container>
                <div className="flex items-center justify-between h-16">
                    <motion.div
                        className="text-2xl font-bold"
                        style={{ color: theme.colors.text }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="/">
                            Aditya Mishra
                        </a>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <motion.a
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium transition-colors duration-200"
                                style={{ color: theme.colors.text }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick(item.href);
                                }}
                            >
                                {item.name}
                            </motion.a>
                        ))}
                        <a href="https://drive.google.com/file/d/1LR2_hJU4Wys9kkR1_DE6tYsqGmrFTKVl/view" target='_blank' className="text-sm font-medium transition-colors duration-200">Resume</a>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={toggleTheme}
                            className="ml-4"
                        >
                            {theme.isDark ? '🌞' : '🌙'}
                        </Button>
                    </div>

                    {/* Mobile Navigation Button */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? '✕' : '☰'}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navItems.map((item) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        className="text-sm font-medium transition-colors duration-200"
                                        style={{ color: theme.colors.text }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavClick(item.href);
                                        }}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={toggleTheme}
                                    className="w-full mt-4"
                                >
                                    {theme.isDark ? '🌞' : '🌙'}
                                </Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </motion.nav>
    );
};