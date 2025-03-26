import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    type = 'button',
    ...props
}) => {
    const { theme } = useTheme();

    const variants = {
        primary: {
            backgroundColor: theme.colors.primary,
            color: '#ffffff',
            '&:hover': {
                backgroundColor: theme.colors.primary,
                opacity: 0.9
            }
        },
        secondary: {
            backgroundColor: theme.colors.secondary,
            color: '#ffffff',
            '&:hover': {
                backgroundColor: theme.colors.secondary,
                opacity: 0.9
            }
        },
        accent: {
            backgroundColor: theme.colors.accent,
            color: '#ffffff',
            '&:hover': {
                backgroundColor: theme.colors.accent,
                opacity: 0.9
            }
        },
        outline: {
            backgroundColor: 'transparent',
            border: `2px solid ${theme.colors.primary}`,
            color: theme.colors.primary,
            '&:hover': {
                backgroundColor: theme.colors.primary,
                color: '#ffffff'
            }
        },
        ghost: {
            backgroundColor: 'transparent',
            color: theme.colors.text,
            '&:hover': {
                backgroundColor: theme.colors.surface
            }
        }
    };

    const sizes = {
        sm: {
            padding: '0.5rem 1rem',
            fontSize: theme.fontSizes.sm
        },
        md: {
            padding: '0.75rem 1.5rem',
            fontSize: theme.fontSizes.base
        },
        lg: {
            padding: '1rem 2rem',
            fontSize: theme.fontSizes.lg
        }
    };

    return (
        <motion.button
            type={type}
            className={`rounded-lg font-medium transition-all duration-200 ${className}`}
            style={{
                ...variants[variant],
                ...sizes[size],
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? 'not-allowed' : 'pointer'
            }}
            onClick={onClick}
            disabled={disabled}
            whileHover={!disabled ? { scale: 1.05 } : {}}
            whileTap={!disabled ? { scale: 0.95 } : {}}
            {...props}
        >
            {children}
        </motion.button>
    );
}; 