import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Building2, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import { useAuth, useNotification } from '../contexts';
import { canAccessAdminPortal } from '../utils/permissions';

interface LoginPageProps {
    onLogin: () => void;
}

const LoginPage = ({ onLogin }: LoginPageProps) => {
    const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Login form
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');

    // Registration form
    const [regFullName, setRegFullName] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regConfirmPassword, setRegConfirmPassword] = useState('');
    const [regStudentId, setRegStudentId] = useState('');
    const [regDepartment, setRegDepartment] = useState('');
    const [regYearOfStudy, setRegYearOfStudy] = useState('1');

    const { login } = useAuth();
    const { error: showError, success } = useNotification();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const loggedInUser = await login(loginEmail, loginPassword);
            if (loggedInUser) {
                success('Welcome back!', `Welcome, ${loggedInUser.fullName}`);

                // Check if there's a return URL
                const returnTo = (location.state as any)?.returnTo;

                if (returnTo) {
                    navigate(returnTo);
                } else if (canAccessAdminPortal(loggedInUser)) {
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

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validation
        if (regPassword !== regConfirmPassword) {
            showError('Passwords do not match', 'Please ensure both passwords are the same');
            return;
        }

        if (regPassword.length < 6) {
            showError('Password too short', 'Password must be at least 6 characters');
            return;
        }

        setIsLoading(true);

        // Simulate registration
        setTimeout(() => {
            success('Registration Successful!', 'Your account is pending approval. You\'ll receive an email once approved.');
            setIsLoading(false);
            setActiveTab('login');
        }, 1500);
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #1A73E8 0%, #0B5FFF 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decoration */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-10%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-30%',
                left: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none'
            }} />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    maxWidth: '900px',
                    width: '100%',
                    overflow: 'hidden',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    position: 'relative',
                    zIndex: 1
                }}
            >
                {/* Left Side - Branding */}
                <div style={{
                    background: 'linear-gradient(180deg, #1A73E8 0%, #0B5FFF 100%)',
                    padding: '60px 40px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    color: 'white',
                    position: 'relative'
                }}>
                    {/* Logo */}
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '36px',
                            fontWeight: '700',
                            marginBottom: '32px',
                            border: '2px solid rgba(255,255,255,0.3)'
                        }}>
                            🧬
                        </div>

                        <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '16px' }}>
                            JKUBS Portal
                        </h1>
                        <p style={{ fontSize: '16px', opacity: 0.9, lineHeight: 1.6, marginBottom: '32px' }}>
                            Join the Jomo Kenyatta University Biochemistry Society and unlock your potential in science.
                        </p>

                        {/* Features */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {['Access learning tracks', 'Join exclusive events', 'Network with peers', 'Earn certificates'].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
                                >
                                    <CheckCircle size={20} />
                                    <span style={{ fontSize: '14px' }}>{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Form */}
                <div style={{ padding: '60px 40px' }}>
                    {/* Tabs */}
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        marginBottom: '32px',
                        background: '#F3F4F6',
                        padding: '4px',
                        borderRadius: '8px'
                    }}>
                        {(['login', 'register'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    flex: 1,
                                    padding: '10px',
                                    background: activeTab === tab ? 'white' : 'transparent',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: activeTab === tab ? '#1A73E8' : '#6B7280',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    boxShadow: activeTab === tab ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                                }}
                            >
                                {tab === 'login' ? 'Sign In' : 'Sign Up'}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence mode="wait">
                        {activeTab === 'login' ? (
                            <motion.form
                                key="login"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleLogin}
                            >
                                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '24px' }}>
                                    Welcome Back
                                </h2>

                                {/* Email */}
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                        Email Address
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <Mail size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                                        <input
                                            type="email"
                                            value={loginEmail}
                                            onChange={(e) => setLoginEmail(e.target.value)}
                                            placeholder="your.email@student.jkuat.ac.ke"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '12px 12px 12px 44px',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '8px',
                                                fontSize: '14px',
                                                outline: 'none',
                                                transition: 'border-color 0.2s'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#1A73E8'}
                                            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                        Password
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <Lock size={20} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={loginPassword}
                                            onChange={(e) => setLoginPassword(e.target.value)}
                                            placeholder="Enter your password"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '12px 44px 12px 44px',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '8px',
                                                fontSize: '14px',
                                                outline: 'none',
                                                transition: 'border-color 0.2s'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#1A73E8'}
                                            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{
                                                position: 'absolute',
                                                right: '12px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                color: '#9CA3AF',
                                                padding: 0
                                            }}
                                        >
                                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Forgot Password */}
                                <div style={{ textAlign: 'right', marginBottom: '24px' }}>
                                    <a href="#" style={{ fontSize: '13px', color: '#1A73E8', textDecoration: 'none' }}>
                                        Forgot password?
                                    </a>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        width: '100%',
                                        padding: '14px',
                                        background: 'linear-gradient(135deg, #1A73E8 0%, #0B5FFF 100%)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        cursor: isLoading ? 'not-allowed' : 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        opacity: isLoading ? 0.7 : 1
                                    }}
                                >
                                    {isLoading ? 'Signing in...' : 'Sign In'} <ArrowRight size={20} />
                                </motion.button>

                                {/* Demo Credentials */}
                                <div style={{
                                    marginTop: '24px',
                                    padding: '16px',
                                    background: '#F9FAFB',
                                    borderRadius: '8px',
                                    border: '1px solid #E5E7EB'
                                }}>
                                    <p style={{ fontSize: '12px', fontWeight: '600', color: '#6B7280', marginBottom: '8px' }}>
                                        Demo Accounts:
                                    </p>
                                    <p style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '4px' }}>
                                        Admin: shiphra.wangu@student.jkuat.ac.ke
                                    </p>
                                    <p style={{ fontSize: '11px', color: '#9CA3AF' }}>
                                        Member: mary.wanjiru@student.jkuat.ac.ke
                                    </p>
                                </div>
                            </motion.form>
                        ) : (
                            <motion.form
                                key="register"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleRegister}
                                style={{ maxHeight: '500px', overflowY: 'auto', paddingRight: '10px' }}
                            >
                                <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '24px' }}>
                                    Create Account
                                </h2>

                                {/* Full Name */}
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                        Full Name
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                                        <input
                                            type="text"
                                            value={regFullName}
                                            onChange={(e) => setRegFullName(e.target.value)}
                                            placeholder="John Doe"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '10px 10px 10px 40px',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '8px',
                                                fontSize: '14px',
                                                outline: 'none'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#1A73E8'}
                                            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                        Email Address
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                                        <input
                                            type="email"
                                            value={regEmail}
                                            onChange={(e) => setRegEmail(e.target.value)}
                                            placeholder="your.email@student.jkuat.ac.ke"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '10px 10px 10px 40px',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '8px',
                                                fontSize: '14px',
                                                outline: 'none'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#1A73E8'}
                                            onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                                        />
                                    </div>
                                </div>

                                {/* Student ID & Department */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                            Student ID
                                        </label>
                                        <input
                                            type="text"
                                            value={regStudentId}
                                            onChange={(e) => setRegStudentId(e.target.value)}
                                            placeholder="SCH123456"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '8px',
                                                fontSize: '14px',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                            Year
                                        </label>
                                        <select
                                            value={regYearOfStudy}
                                            onChange={(e) => setRegYearOfStudy(e.target.value)}
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '8px',
                                                fontSize: '14px',
                                                outline: 'none'
                                            }}
                                        >
                                            <option value="1">Year 1</option>
                                            <option value="2">Year 2</option>
                                            <option value="3">Year 3</option>
                                            <option value="4">Year 4</option>
                                            <option value="5">Year 5+</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Department */}
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                        Department
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <Building2 size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                                        <input
                                            type="text"
                                            value={regDepartment}
                                            onChange={(e) => setRegDepartment(e.target.value)}
                                            placeholder="Biochemistry"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '10px 10px 10px 40px',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '8px',
                                                fontSize: '14px',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div style={{ marginBottom: '16px' }}>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                        Password
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={regPassword}
                                            onChange={(e) => setRegPassword(e.target.value)}
                                            placeholder="At least 6 characters"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '10px 40px 10px 40px',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '8px',
                                                fontSize: '14px',
                                                outline: 'none'
                                            }}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{
                                                position: 'absolute',
                                                right: '12px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                background: 'none',
                                                border: 'none',
                                                cursor: 'pointer',
                                                color: '#9CA3AF',
                                                padding: 0
                                            }}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>
                                </div>

                                {/* Confirm Password */}
                                <div style={{ marginBottom: '20px' }}>
                                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#374151', marginBottom: '6px' }}>
                                        Confirm Password
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={regConfirmPassword}
                                            onChange={(e) => setRegConfirmPassword(e.target.value)}
                                            placeholder="Re-enter password"
                                            required
                                            style={{
                                                width: '100%',
                                                padding: '10px 10px 10px 40px',
                                                border: '1px solid #E5E7EB',
                                                borderRadius: '8px',
                                                fontSize: '14px',
                                                outline: 'none'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    style={{
                                        width: '100%',
                                        padding: '12px',
                                        background: 'linear-gradient(135deg, #1A73E8 0%, #0B5FFF 100%)',
                                        color: 'white',
                                        border: 'none',
                                        borderRadius: '8px',
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        cursor: isLoading ? 'not-allowed' : 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '8px',
                                        opacity: isLoading ? 0.7 : 1
                                    }}
                                >
                                    {isLoading ? 'Creating Account...' : 'Create Account'} <ArrowRight size={18} />
                                </motion.button>

                                <p style={{ fontSize: '11px', color: '#6B7280', marginTop: '16px', textAlign: 'center' }}>
                                    By signing up, you agree to our Terms of Service and Privacy Policy
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};

export default LoginPage;
