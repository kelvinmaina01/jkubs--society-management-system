import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth, useNotification } from '../contexts';
import { Shield, Lock, ChevronRight } from 'lucide-react';

const AdminLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const { error: showError, success } = useNotification();
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // In a real app, we would have a separate admin login endpoint
            // For now, we check if the user has admin privileges after login
            const isSuccess = await login(email, password);

            if (isSuccess) {
                // Check if the logged-in user is actually an admin
                // This is a mock check - in real app, backend handles this
                if (email.includes('admin') || email.includes('chair') || email.includes('lead')) {
                    success('Admin Access Granted', 'Welcome to the Management Console');
                    navigate('/dashboard'); // Or a specific admin dashboard route if exists
                } else {
                    showError('Access Denied', 'You do not have administrative privileges.');
                    // Optionally logout if not admin
                }
            } else {
                showError('Authentication Failed', 'Invalid credentials');
            }
        } catch (err) {
            showError('System Error', 'An unexpected error occurred.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#111827', // Dark background for admin
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            fontFamily: 'Inter, sans-serif'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    background: '#1F2937',
                    borderRadius: '16px',
                    border: '1px solid #374151',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    overflow: 'hidden'
                }}
            >
                {/* Header */}
                <div style={{
                    padding: '32px 32px 24px',
                    textAlign: 'center',
                    borderBottom: '1px solid #374151'
                }}>
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 16px',
                        color: '#3B82F6'
                    }}>
                        <Shield size={32} />
                    </div>
                    <h1 style={{ fontSize: '24px', fontWeight: '700', color: 'white', marginBottom: '8px' }}>
                        Admin Portal
                    </h1>
                    <p style={{ color: '#9CA3AF', fontSize: '14px' }}>
                        Restricted Access Only
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ padding: '32px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', color: '#D1D5DB', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                            Admin Email
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@jkubs.org"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    paddingLeft: '40px',
                                    background: '#374151',
                                    border: '1px solid #4B5563',
                                    borderRadius: '8px',
                                    color: 'white',
                                    fontSize: '14px',
                                    outline: 'none',
                                    transition: 'border-color 0.2s'
                                }}
                            />
                            <Shield size={16} style={{ position: 'absolute', left: '12px', top: '14px', color: '#9CA3AF' }} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <label style={{ display: 'block', color: '#D1D5DB', fontSize: '14px', fontWeight: '500', marginBottom: '8px' }}>
                            Security Key
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                style={{
                                    width: '100%',
                                    padding: '12px 16px',
                                    paddingLeft: '40px',
                                    background: '#374151',
                                    border: '1px solid #4B5563',
                                    borderRadius: '8px',
                                    color: 'white',
                                    fontSize: '14px',
                                    outline: 'none'
                                }}
                            />
                            <Lock size={16} style={{ position: 'absolute', left: '12px', top: '14px', color: '#9CA3AF' }} />
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isLoading}
                        style={{
                            width: '100%',
                            padding: '12px',
                            background: '#3B82F6',
                            color: 'white',
                            border: 'none',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '14px',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            opacity: isLoading ? 0.7 : 1
                        }}
                    >
                        {isLoading ? 'Authenticating...' : (
                            <>
                                Access Console <ChevronRight size={16} />
                            </>
                        )}
                    </motion.button>
                </form>

                {/* Footer */}
                <div style={{
                    padding: '16px',
                    background: '#111827',
                    borderTop: '1px solid #374151',
                    textAlign: 'center'
                }}>
                    <p style={{ fontSize: '12px', color: '#6B7280' }}>
                        Unauthorized access is strictly prohibited.
                        <br />
                        IP Address Logged.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default AdminLoginPage;
