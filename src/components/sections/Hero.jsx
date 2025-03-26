import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const Hero = () => {
    const { theme } = useTheme();

    return (
        <Section id="hero" className="min-h-screen flex items-center bg-[url('https://images6.alphacoders.com/123/1239288.png')] bg-cover bg-center">
            {/* <img src="/images/oracle.jpg" alt="Background-image" className='bg-center bg-cover'/> */}
            <Container>
                <div className="grid grid-cols-1 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="flex items-center justify-center mb-4"
                        >
                            <span className="text-5xl md:text-7xl font-bold">Hi!</span>
                        </motion.div>
                        <h1
                            className="text-5xl md:text-7xl font-bold mb-4"
                            style={{ color: theme.colors.text }}
                        >
                            I'm <span style={{ color: theme.colors.primary }}>Aditya Mishra</span>
                        </h1>
                        <p
                            className="text-2xl md:text-3xl mb-4"
                            style={{ color: 'white' }}
                        >
                            Full Stack Web Developer, Web3 Developer, and Smart Contract Security Researcher & Auditor
                        </p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="flex justify-center space-x-4 mb-6"
                        >
                            <a
                                href="https://www.github.com/mishraji874"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors"
                            >
                                <i className="fab fa-github text-3xl"></i>
                            </a>
                            <a
                                href="https://x.com/mishraji874_eth"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors"
                            >
                                <i className="fab fa-twitter text-3xl"></i>
                            </a>
                            <a
                                href="https://telegram.me/mishraji63"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500 transition-colors"
                            >
                                <i className="fab fa-telegram text-3xl"></i>
                            </a>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <a
                                href="#contact"
                                className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                            >
                                Get in Touch
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}; 