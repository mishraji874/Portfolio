import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';

export const About = () => {
    const { theme } = useTheme();

    return (
        <Section id="about" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2
                        className="text-3xl font-bold mb-4"
                        style={{ color: theme.colors.text }}
                    >
                        About Me
                    </h2>
                    <p
                        className="text-lg"
                        style={{ color: theme.colors.textSecondary }}
                    >
                        Learn more about who I am
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3
                                    className="text-2xl font-bold mb-4"
                                    style={{ color: theme.colors.text }}
                                >
                                    Professional Background
                                </h3>
                                <p
                                    className="text-lg mb-4"
                                    style={{ color: theme.colors.text }}
                                >
                                    I am a passionate Full Stack Web Developer and Smart Contract Security Researcher with expertise in building modern web applications and securing blockchain protocols. My journey in software development began with a deep curiosity about how things work on the internet, which led me to explore various programming languages and frameworks.
                                </p>
                                <p
                                    className="text-lg mb-4"
                                    style={{ color: theme.colors.text }}
                                >
                                    As a Smart Contract Security Researcher & Auditor, I specialize in identifying vulnerabilities in blockchain applications and ensuring their security. I have conducted numerous security audits for various blockchain protocols and smart contracts, helping to make the Web3 ecosystem more secure.
                                </p>
                            </div>
                            <div>
                                <h3
                                    className="text-2xl font-bold mb-4"
                                    style={{ color: theme.colors.text }}
                                >
                                    Technical Expertise
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span style={{ color: theme.colors.text }}>Full Stack Web Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span style={{ color: theme.colors.text }}>Smart Contract Development & Security</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span style={{ color: theme.colors.text }}>Web3 Integration & DApp Development</span>
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span style={{ color: theme.colors.text }}>Blockchain Security Auditing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h3
                                className="text-2xl font-bold mb-4"
                                style={{ color: theme.colors.text }}
                            >
                                Beyond Coding
                            </h3>
                            <p
                                className="text-lg"
                                style={{ color: theme.colors.text }}
                            >
                                When I'm not immersed in code, I actively contribute to the blockchain security community through technical blog posts and open-source projects. I'm passionate about sharing knowledge and helping others understand the importance of security in the Web3 space. I also enjoy exploring new technologies and staying updated with the latest developments in blockchain and web development.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};
