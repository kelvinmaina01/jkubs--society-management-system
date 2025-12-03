import React, { createContext, useContext, useState, useCallback } from 'react';
import type { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface Notification {
    id: string;
    type: NotificationType;
    title: string;
    message?: string;
    duration?: number;
}

interface NotificationContextType {
    notifications: Notification[];
    addNotification: (notification: Omit<Notification, 'id'>) => void;
    removeNotification: (id: string) => void;
    success: (title: string, message?: string) => void;
    error: (title: string, message?: string) => void;
    warning: (title: string, message?: string) => void;
    info: (title: string, message?: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

interface NotificationProviderProps {
    children: ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
        const id = `notification-${Date.now()}-${Math.random()}`;
        const newNotification: Notification = {
            ...notification,
            id,
            duration: notification.duration || 5000,
        };

        setNotifications((prev) => [...prev, newNotification]);

        // Auto-remove after duration
        if (newNotification.duration) {
            setTimeout(() => {
                removeNotification(id);
            }, newNotification.duration);
        }
    }, []);

    const removeNotification = useCallback((id: string) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, []);

    const success = useCallback((title: string, message?: string) => {
        addNotification({ type: 'success', title, message });
    }, [addNotification]);

    const error = useCallback((title: string, message?: string) => {
        addNotification({ type: 'error', title, message });
    }, [addNotification]);

    const warning = useCallback((title: string, message?: string) => {
        addNotification({ type: 'warning', title, message });
    }, [addNotification]);

    const info = useCallback((title: string, message?: string) => {
        addNotification({ type: 'info', title, message });
    }, [addNotification]);

    const value: NotificationContextType = {
        notifications,
        addNotification,
        removeNotification,
        success,
        error,
        warning,
        info,
    };

    return (
        <NotificationContext.Provider value={value}>
            {children}
            <NotificationContainer notifications={notifications} onRemove={removeNotification} />
        </NotificationContext.Provider>
    );
};

// Notification Toast Component
interface NotificationContainerProps {
    notifications: Notification[];
    onRemove: (id: string) => void;
}

const NotificationContainer: React.FC<NotificationContainerProps> = ({ notifications, onRemove }) => {
    const getIcon = (type: NotificationType) => {
        switch (type) {
            case 'success': return '✓';
            case 'error': return '✕';
            case 'warning': return '⚠';
            case 'info': return 'ℹ';
        }
    };

    const getColor = (type: NotificationType) => {
        switch (type) {
            case 'success': return 'var(--color-success)';
            case 'error': return 'var(--color-error)';
            case 'warning': return 'var(--color-warning)';
            case 'info': return 'var(--color-info)';
        }
    };

    return (
        <div style={{
            position: 'fixed',
            bottom: 'var(--space-6)',
            right: 'var(--space-6)',
            zIndex: 2000,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-3)',
            maxWidth: '400px',
        }}>
            <AnimatePresence>
                {notifications.map((notification) => (
                    <motion.div
                        key={notification.id}
                        initial={{ opacity: 0, x: 100, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 100, scale: 0.9 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        style={{
                            background: 'var(--color-white)',
                            borderRadius: 'var(--radius-lg)',
                            padding: 'var(--space-4)',
                            boxShadow: 'var(--shadow-xl)',
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: 'var(--space-3)',
                            borderLeft: `4px solid ${getColor(notification.type)}`,
                        }}
                    >
                        <div style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            background: getColor(notification.type),
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            fontWeight: 'bold',
                            flexShrink: 0,
                        }}>
                            {getIcon(notification.type)}
                        </div>

                        <div style={{ flex: 1 }}>
                            <div style={{
                                fontWeight: 'var(--font-weight-medium)',
                                fontSize: 'var(--font-size-body)',
                                color: 'var(--color-neutral-dark)',
                                marginBottom: notification.message ? 'var(--space-1)' : 0,
                            }}>
                                {notification.title}
                            </div>
                            {notification.message && (
                                <div style={{
                                    fontSize: 'var(--font-size-small)',
                                    color: '#6B7280',
                                }}>
                                    {notification.message}
                                </div>
                            )}
                        </div>

                        <button
                            onClick={() => onRemove(notification.id)}
                            style={{
                                background: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                padding: '4px',
                                color: '#9CA3AF',
                                fontSize: '18px',
                                lineHeight: 1,
                            }}
                        >
                            ×
                        </button>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
};
