import { motion } from 'framer-motion';
import { CheckCircle, AlertTriangle, XCircle, Info, X } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
    id: string;
    type: ToastType;
    message: string;
    onDismiss: (id: string) => void;
}

const Toast = ({ id, type, message, onDismiss }: ToastProps) => {

    const icons = {
        success: <CheckCircle size={20} color="#059669" />,
        error: <XCircle size={20} color="#DC2626" />,
        warning: <AlertTriangle size={20} color="#D97706" />,
        info: <Info size={20} color="#2563EB" />,
    };

    const styles = {
        success: { background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#065F46' },
        error: { background: '#FEF2F2', border: '1px solid #FECACA', color: '#991B1B' },
        warning: { background: '#FFFBEB', border: '1px solid #FDE68A', color: '#92400E' },
        info: { background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#1E40AF' },
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                borderRadius: '12px',
                boxShadow: 'var(--shadow-lg)',
                minWidth: '300px',
                maxWidth: '400px',
                pointerEvents: 'auto',
                ...styles[type]
            }}
        >
            <div style={{ flexShrink: 0 }}>{icons[type]}</div>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 500, flex: 1 }}>{message}</p>
            <button
                onClick={() => onDismiss(id)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '4px',
                    color: 'currentColor',
                    opacity: 0.6,
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <X size={16} />
            </button>
        </motion.div>
    );
};

export default Toast;
