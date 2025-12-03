import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral' | 'primary';
    size?: 'sm' | 'md';
    className?: string;
}

const Badge = ({
    children,
    variant = 'neutral',
    size = 'md',
    className = ''
}: BadgeProps) => {

    const variantStyles = {
        success: { background: '#D1FAE5', color: '#065F46', border: '1px solid #A7F3D0' },
        warning: { background: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A' },
        error: { background: '#FEE2E2', color: '#991B1B', border: '1px solid #FECACA' },
        info: { background: '#DBEAFE', color: '#1E40AF', border: '1px solid #BFDBFE' },
        neutral: { background: '#F3F4F6', color: '#374151', border: '1px solid #E5E7EB' },
        primary: { background: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-primary-blue)', border: '1px solid rgba(59, 130, 246, 0.2)' },
    };

    const sizeStyles = {
        sm: { fontSize: '11px', padding: '2px 6px' },
        md: { fontSize: '13px', padding: '4px 10px' },
    };

    return (
        <span
            className={className}
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                fontWeight: 600,
                lineHeight: 1,
                ...variantStyles[variant],
                ...sizeStyles[size],
            }}
        >
            {children}
        </span>
    );
};

export default Badge;
