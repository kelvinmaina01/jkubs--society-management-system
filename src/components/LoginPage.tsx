import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth, useNotification } from '../contexts';
import { canAccessAdminPortal } from '../utils/permissions';

interface LoginPageProps {
    onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
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
            const loggedInUser = await login(email, password);
            if (loggedInUser) {
                success('Welcome back!', 'Successfully logged in');

                // Role-based redirect
                if (canAccessAdminPortal(loggedInUser)) {
                    navigate('/admin/dashboard');
                } else {
                    navigate('/members/dashboard');
                }

                onLogin();
            } else {
                showError('Invalid credentials', 'Please check your email and password');
            }
        } catch (err) {
            showError('Login failed', 'An error occurred. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'var(--gradient-mesh), linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-secondary-blue) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-4)'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
                className="card glass-strong"
                style={{ maxWidth: '480px', width: '100%', padding: 'var(--space-8)' }}
            >
                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}
                >
                    <div className="bg-gradient-primary" style={{
                        width: '80px',
                        height: '80px',
                        borderRadius: 'var(--radius-xl)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-white)',
                        margin: '0 auto var(--space-4)',
                        boxShadow: 'var(--shadow-glow)',
                    }}>
                        JK
                    </div>
                    <h1 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-2)' }}>
                        JKUBS Portal
                    </h1>
                    <p style={{ color: '#6B7280' }}>
                        Biochemistry Society Management
                    </p>
                </motion.div>

                {/* Login Form */}
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="your.email@student.jkuat.ac.ke"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            disabled={isLoading}
                        />
                    </div>

                    <motion.button
                        type="submit"
                        className="btn btn-primary btn-lg bg-gradient-animated"
                        style={{ width: '100%', marginBottom: 'var(--space-4)' }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="animate-pulse">Signing in...</span>
                        ) : (
                            'Sign In'
                        )}
                    </motion.button>

                    <div style={{ textAlign: 'center' }}>
                        <a href="#" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-accent-cyan)' }}>
                            Forgot password?
                        </a>
                    </div>
                </motion.form>

                {/* Demo Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        marginTop: 'var(--space-8)',
                        padding: 'var(--space-4)',
                        background: 'var(--color-light-gray)',
                        borderRadius: 'var(--radius-md)'
                    }}
                >
                    <p style={{ fontSize: 'var(--font-size-xs)', color: '#6B7280', marginBottom: 'var(--space-2)', fontWeight: 'var(--font-weight-bold)' }}>
                        Demo Accounts:
                    </p>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: '#6B7280', marginBottom: 'var(--space-1)' }}>
                        👤 Chairman: shiphra.wangu@student.jkuat.ac.ke
                    </p>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: '#6B7280', marginBottom: 'var(--space-1)' }}>
                        👤 Treasurer: james.mwangi@student.jkuat.ac.ke
                    </p>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: '#6B7280', marginBottom: 'var(--space-1)' }}>
                        👤 Secretary: peter.otieno@student.jkuat.ac.ke
                    </p>
                    <p style={{ fontSize: 'var(--font-size-xs)', color: '#6B7280' }}>
                        👤 Member: mary.wanjiru@student.jkuat.ac.ke
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
