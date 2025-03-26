import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const Section = ({ children, className = '', id, ...props }) => {
    const { theme } = useTheme();

    return (
        <section
            id={id}
            className={`py-16 sm:py-24 ${className}`}
            style={{
                backgroundColor: theme.colors.background
            }}
            {...props}
        >
            {children}
        </section>
    );
}; 