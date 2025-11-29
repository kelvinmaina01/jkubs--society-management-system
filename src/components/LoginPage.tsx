import { useState } from 'react';
import { loginUser } from '../mockData';

interface LoginPageProps {
    onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        const user = loginUser(email, password);
        if (user) {
            onLogin();
        } else {
            setError('Invalid credentials. Try: shiphra.wangu@student.jkuat.ac.ke');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-secondary-blue) 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'var(--space-4)'
        }}>
            <div className="card" style={{ maxWidth: '480px', width: '100%', padding: 'var(--space-8)' }}>
                {/* Logo */}
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
                    <div style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-secondary-blue) 100%)',
                        borderRadius: 'var(--radius-xl)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-white)',
                        margin: '0 auto var(--space-4)',
                    }}>
                        JK
                    </div>
                    <h1 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-2)' }}>
                        JKUBS Portal
                    </h1>
                    <p style={{ color: '#6B7280' }}>
                        Biochemistry Society Management
                    </p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input
                            type="email"
                            className="form-input"
                            placeholder="your.email@student.jkuat.ac.ke"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
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
                        />
                    </div>

                    {error && (
                        <div style={{
                            padding: 'var(--space-3)',
                            background: 'rgba(239, 68, 68, 0.1)',
                            color: 'var(--color-error)',
                            borderRadius: 'var(--radius-md)',
                            marginBottom: 'var(--space-4)',
                            fontSize: 'var(--font-size-small)'
                        }}>
                            {error}
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginBottom: 'var(--space-4)' }}>
                        Sign In
                    </button>

                    <div style={{ textAlign: 'center' }}>
                        <a href="#" style={{ fontSize: 'var(--font-size-small)', color: 'var(--color-accent-cyan)' }}>
                            Forgot password?
                        </a>
                    </div>
                </form>

                {/* Demo Info */}
                <div style={{
                    marginTop: 'var(--space-8)',
                    padding: 'var(--space-4)',
                    background: 'var(--color-light-gray)',
                    borderRadius: 'var(--radius-md)'
                }}>
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
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
