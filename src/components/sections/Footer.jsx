import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { Container } from '../layout/Container';
import { Section } from '../layout/Section';
import { FaGithub, FaLinkedin, FaTwitter, FaTelegram } from 'react-icons/fa';
import { IoMailOpen } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";

export const Footer = () => {
    const { theme } = useTheme();

    return (
        <Section className="mt-16">
            <Container>
                <div className="text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-gray-400"
                    >
                        © {new Date().getFullYear()} Made with{' '}
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            ❤️
                        </motion.span>{' '}
                        by Aditya Mishra
                    </motion.p>
                </div>
            </Container>
        </Section>
    );
};

