import React from 'react';

interface SkeletonProps {
    variant?: 'text' | 'circular' | 'rectangular';
    width?: string | number;
    height?: string | number;
    className?: string;
}

const Skeleton = ({
    variant = 'text',
    width,
    height,
    className = ''
}: SkeletonProps) => {

    const baseStyle: React.CSSProperties = {
        background: 'var(--color-border)',
        borderRadius: variant === 'circular' ? '50%' : '4px',
        width: width || (variant === 'text' ? '100%' : '100px'),
        height: height || (variant === 'text' ? '1em' : '100px'),
        display: 'inline-block',
        animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        opacity: 0.7,
    };

    return (
        <div
            className={`skeleton ${className}`}
            style={baseStyle}
        />
    );
};

export default Skeleton;
