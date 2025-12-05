import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone, Check, Loader2, AlertCircle } from 'lucide-react';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
    amount: number;
    eventName: string;
}

const PaymentModal = ({ isOpen, onClose, onSuccess, amount, eventName }: PaymentModalProps) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    useEffect(() => {
        if (isOpen) {
            setStatus('idle');
            setPhoneNumber('');
            setMessage('');
        }
    }, [isOpen]);

    const handlePayment = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!phoneNumber.match(/^(?:254|\+254|0)?([71](?:(?:[0-9][0-9])|(?:[0-9][0-9]))[0-9]{6})$/)) {
            setStatus('error');
            setMessage('Please enter a valid Safaricom number');
            return;
        }

        setStatus('processing');
        setMessage('Sending STK Push to your phone...');

        // Simulate API call and STK Push delay
        setTimeout(() => {
            setMessage('Please enter your M-Pesa PIN on your phone');

            // Simulate user entering PIN and success callback
            setTimeout(() => {
                setStatus('success');
                setMessage('Payment received successfully!');

                // Close modal after success message
                setTimeout(() => {
                    onSuccess();
                    onClose();
                }, 2000);
            }, 3000);
        }, 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.5)',
                            backdropFilter: 'blur(4px)',
                            zIndex: 1000
                        }}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        style={{
                            position: 'fixed',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '90%',
                            maxWidth: '400px',
                            background: 'white',
                            borderRadius: '24px',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            zIndex: 1001,
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header */}
                        <div style={{
                            background: '#059669',
                            padding: '24px',
                            color: 'white',
                            textAlign: 'center',
                            position: 'relative'
                        }}>
                            <button
                                onClick={onClose}
                                style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    background: 'rgba(255,255,255,0.2)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '32px',
                                    height: '32px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: 'white'
                                }}
                            >
                                <X size={18} />
                            </button>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                background: 'white',
                                borderRadius: '50%',
                                margin: '0 auto 16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: '#059669'
                            }}>
                                <Smartphone size={32} />
                            </div>
                            <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700' }}>M-Pesa Payment</h3>
                            <p style={{ margin: '8px 0 0', opacity: 0.9, fontSize: '14px' }}>
                                Pay KES {amount.toLocaleString()} for {eventName}
                            </p>
                        </div>

                        {/* Body */}
                        <div style={{ padding: '24px' }}>
                            {status === 'success' ? (
                                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        background: '#D1FAE5',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 16px',
                                        color: '#059669'
                                    }}>
                                        <Check size={32} strokeWidth={3} />
                                    </div>
                                    <h4 style={{ margin: '0 0 8px', fontSize: '18px', color: '#065F46' }}>Payment Successful!</h4>
                                    <p style={{ margin: 0, color: '#6B7280', fontSize: '14px' }}>
                                        You have been registered for the event.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handlePayment}>
                                    <div style={{ marginBottom: '20px' }}>
                                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                            M-Pesa Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            placeholder="e.g., 0712345678"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            disabled={status === 'processing'}
                                            style={{
                                                width: '100%',
                                                padding: '12px',
                                                borderRadius: '12px',
                                                border: '1px solid #D1D5DB',
                                                fontSize: '16px',
                                                outline: 'none',
                                                transition: 'border-color 0.2s'
                                            }}
                                        />
                                        <p style={{ fontSize: '12px', color: '#6B7280', marginTop: '6px' }}>
                                            Enter the number to receive the STK push.
                                        </p>
                                    </div>

                                    {status === 'error' && (
                                        <div style={{
                                            padding: '12px',
                                            background: '#FEF2F2',
                                            borderRadius: '8px',
                                            display: 'flex',
                                            gap: '8px',
                                            color: '#991B1B',
                                            fontSize: '14px',
                                            marginBottom: '20px'
                                        }}>
                                            <AlertCircle size={18} />
                                            {message}
                                        </div>
                                    )}

                                    {status === 'processing' && (
                                        <div style={{
                                            textAlign: 'center',
                                            marginBottom: '20px',
                                            color: '#059669',
                                            fontWeight: '500',
                                            fontSize: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: '8px'
                                        }}>
                                            <Loader2 size={18} className="animate-spin" />
                                            {message}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        disabled={status === 'processing' || !phoneNumber}
                                        style={{
                                            width: '100%',
                                            padding: '14px',
                                            background: status === 'processing' ? '#9CA3AF' : '#059669',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '12px',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            cursor: status === 'processing' ? 'not-allowed' : 'pointer',
                                            transition: 'background 0.2s'
                                        }}
                                    >
                                        {status === 'processing' ? 'Processing...' : `Pay KES ${amount.toLocaleString()}`}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PaymentModal;
