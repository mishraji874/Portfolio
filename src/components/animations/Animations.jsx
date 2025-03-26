import React from 'react';
import { motion } from 'framer-motion';

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
};

export const slideUp = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 20, opacity: 0 },
    transition: { duration: 0.5 }
};

export const slideDown = {
    initial: { y: -20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
    transition: { duration: 0.5 }
};

export const slideLeft = {
    initial: { x: 20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: 20, opacity: 0 },
    transition: { duration: 0.5 }
};

export const slideRight = {
    initial: { x: -20, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 },
    transition: { duration: 0.5 }
};

export const scale = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 },
    transition: { duration: 0.5 }
};

export const rotate = {
    initial: { rotate: -180, opacity: 0 },
    animate: { rotate: 0, opacity: 1 },
    exit: { rotate: 180, opacity: 0 },
    transition: { duration: 0.5 }
};

export const AnimatedSection = ({ children, variants, ...props }) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const AnimatedText = ({ text, variants, ...props }) => {
    return (
        <motion.span
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            {...props}
        >
            {text}
        </motion.span>
    );
};

export const AnimatedImage = ({ src, alt, variants, ...props }) => {
    return (
        <motion.img
            src={src}
            alt={alt}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={variants}
            {...props}
        />
    );
}; 