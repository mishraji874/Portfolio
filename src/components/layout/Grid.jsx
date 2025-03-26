import React from 'react';
import { motion } from 'framer-motion';

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