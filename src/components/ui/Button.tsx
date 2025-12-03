import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        children,
        variant = 'primary',
        size = 'md',
        isLoading = false,
        leftIcon,
        rightIcon,
        fullWidth = false,
        className = '',
        disabled,
        ...props
    }, ref) => {

        const baseStyles = {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            fontWeight: 600,
            cursor: 'pointer',
            transition: 'all 0.2s',
            border: 'none',
            outline: 'none',
            gap: '8px',
            width: fullWidth ? '100%' : 'auto',
            position: 'relative' as const,
        };

        const sizeStyles = {
            sm: { padding: '6px 12px', fontSize: '13px' },
            md: { padding: '10px 20px', fontSize: '15px' },
            lg: { padding: '14px 28px', fontSize: '17px' },
        };

        const variantStyles = {
            primary: {
                background: 'var(--gradient-primary)',
                color: 'white',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid transparent',
            },
            secondary: {
                background: 'var(--color-secondary)',
                color: 'white',
                border: '1px solid transparent',
            },
            outline: {
                background: 'transparent',
                color: 'var(--color-primary-blue)',
                border: '1px solid var(--color-primary-blue)',
            },
            ghost: {
                background: 'transparent',
                color: 'var(--color-text-secondary)',
                border: '1px solid transparent',
            },
            danger: {
                background: '#EF4444',
                color: 'white',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid transparent',
            },
        };

        const isDisabled = disabled || isLoading;

        return (
            <motion.button
                ref={ref}
                whileHover={!isDisabled ? { scale: 1.02, translateY: -1 } : {}}
                whileTap={!isDisabled ? { scale: 0.98 } : {}}
                disabled={isDisabled}
                className={`${className} ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                style={{
                    ...baseStyles,
                    ...sizeStyles[size],
                    ...variantStyles[variant],
                }}
                {...props}
            >
                {isLoading && (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    >
                        <Loader2 size={16} />
                    </motion.div>
                )}
                {!isLoading && leftIcon}
                {children}
                {!isLoading && rightIcon}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';

export default Button;
