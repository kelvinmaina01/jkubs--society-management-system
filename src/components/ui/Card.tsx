import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    variant?: 'default' | 'glass' | 'glass-strong' | 'outline';
    hoverEffect?: boolean;
    noPadding?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({
        children,
        variant = 'default',
        hoverEffect = false,
        noPadding = false,
        className = '',
        style,
        ...props
    }, ref) => {

        const getVariantClass = () => {
            switch (variant) {
                case 'glass': return 'glass';
                case 'glass-strong': return 'glass-strong';
                default: return '';
            }
        };

        const baseStyle = {
            background: variant === 'default' ? 'var(--color-surface)' : undefined,
            border: variant === 'outline' ? '1px solid var(--color-border)' : undefined,
            borderRadius: 'var(--radius-xl)',
            padding: noPadding ? '0' : '24px',
            boxShadow: variant === 'default' ? 'var(--shadow-md)' : undefined,
            overflow: 'hidden',
            ...style
        };

        return (
            <motion.div
                ref={ref}
                className={`${getVariantClass()} ${className}`}
                style={baseStyle}
                whileHover={hoverEffect ? { y: -5, boxShadow: 'var(--shadow-lg)' } : {}}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = 'Card';

export default Card;
