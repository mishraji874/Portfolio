import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export const Container = ({
    children,
    className = '',
    maxWidth = '7xl',
    padding = true,
    ...props
}) => {
    const { theme } = useTheme();

    const maxWidths = {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '7xl': '1280px'
    };

    return (
        <motion.div
            className={`mx-auto ${padding ? 'px-4 sm:px-6 lg:px-8' : ''} ${className}`}
            style={{
                maxWidth: maxWidths[maxWidth]
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export const Section = ({
    children,
    className = '',
    id,
    ...props
}) => {
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

export const Grid = ({
    children,
    className = '',
    cols = 1,
    gap = 4,
    ...props
}) => {
    const gridCols = {
        1: 'grid-cols-1',
        2: 'grid-cols-1 sm:grid-cols-2',
        3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
        4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
    };

    const gaps = {
        2: 'gap-2',
        4: 'gap-4',
        6: 'gap-6',
        8: 'gap-8'
    };

    return (
        <div
            className={`grid ${gridCols[cols]} ${gaps[gap]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};

export const Flex = ({
    children,
    className = '',
    direction = 'row',
    align = 'start',
    justify = 'start',
    wrap = false,
    gap = 0,
    ...props
}) => {
    const directions = {
        row: 'flex-row',
        col: 'flex-col'
    };

    const aligns = {
        start: 'items-start',
        center: 'items-center',
        end: 'items-end',
        stretch: 'items-stretch',
        baseline: 'items-baseline'
    };

    const justifies = {
        start: 'justify-start',
        center: 'justify-center',
        end: 'justify-end',
        between: 'justify-between',
        around: 'justify-around',
        evenly: 'justify-evenly'
    };

    const gaps = {
        0: '',
        2: 'gap-2',
        4: 'gap-4',
        6: 'gap-6',
        8: 'gap-8'
    };

    return (
        <div
            className={`flex ${directions[direction]} ${aligns[align]} ${justifies[justify]} ${wrap ? 'flex-wrap' : ''
                } ${gaps[gap]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}; 