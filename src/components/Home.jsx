import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Certifications } from './sections/Certifications';
import { Contact } from './sections/Contact';
import { Footer } from './Footer';

export const Home = () => {
    const { theme } = useTheme();

    return (
        <div style={{ backgroundColor: theme.colors.background }}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    );
};
