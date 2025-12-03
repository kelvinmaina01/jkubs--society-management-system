import { useState } from 'react';
import type { User } from '../types';
import { Menu, X, LogOut, LayoutDashboard, Calendar, Users, CreditCard, Bell, Briefcase, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
    user: User;
    currentPage: string;
    onNavigate: (page: string) => void;
    onLogout: () => void;
}

const Navbar = ({ user, currentPage, onNavigate, onLogout }: NavbarProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} />, roles: ['all'] },
        { id: 'events', label: 'Events', icon: <Calendar size={18} />, roles: ['all'] },
        { id: 'members', label: 'Members', icon: <Users size={18} />, roles: ['all'] },
        { id: 'payments', label: 'Payments', icon: <CreditCard size={18} />, roles: ['treasurer', 'admin', 'chairman'] },
        { id: 'announcements', label: 'Announcements', icon: <Bell size={18} />, roles: ['secretary', 'admin', 'chairman'] },
        { id: 'committees', label: 'Committees', icon: <Briefcase size={18} />, roles: ['secretary', 'admin', 'chairman'] },
    ].filter(item => item.roles.includes('all') || item.roles.includes(user.role));

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid #E5E7EB',
            zIndex: 999,
            height: '72px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 24px',
                width: '100%',
                maxWidth: '1280px',
                margin: '0 auto'
            }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => onNavigate('dashboard')}>
                    <div style={{
                        width: '40px',
                        height: '40px',
                        background: 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '700',
                        fontSize: '18px',
                        boxShadow: '0 4px 6px -1px rgba(59, 130, 246, 0.2)'
                    }}>
                        JK
                    </div>
                    <div style={{ lineHeight: 1.2 }}>
                        <h1 style={{ fontSize: '18px', fontWeight: '700', color: '#111827', margin: 0 }}>JKUBS</h1>
                        <p style={{ fontSize: '12px', color: '#6B7280', margin: 0, fontWeight: '500' }}>Society Management</p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '8px 16px',
                                borderRadius: '8px',
                                border: 'none',
                                background: currentPage === item.id ? '#EFF6FF' : 'transparent',
                                color: currentPage === item.id ? '#2563EB' : '#4B5563',
                                fontSize: '14px',
                                fontWeight: currentPage === item.id ? '600' : '500',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            {item.icon}
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* User Menu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={() => setUserMenuOpen(!userMenuOpen)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px',
                                background: 'white',
                                border: '1px solid #E5E7EB',
                                padding: '6px 12px',
                                borderRadius: '30px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease'
                            }}
                        >
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: '#F3F4F6',
                                backgroundImage: `url(${user.profile?.photoUrl})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                border: '2px solid white',
                                boxShadow: '0 0 0 1px #E5E7EB'
                            }} />
                            <div style={{ textAlign: 'left', display: 'none', md: 'block' }} className="user-info">
                                <p style={{ fontSize: '13px', fontWeight: '600', color: '#111827', margin: 0 }}>{user.fullName.split(' ')[0]}</p>
                                <p style={{ fontSize: '11px', color: '#6B7280', margin: 0, textTransform: 'capitalize' }}>{user.role}</p>
                            </div>
                            <ChevronDown size={14} color="#6B7280" />
                        </button>

                        <AnimatePresence>
                            {userMenuOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                    style={{
                                        position: 'absolute',
                                        top: '120%',
                                        right: 0,
                                        width: '200px',
                                        background: 'white',
                                        borderRadius: '12px',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                                        border: '1px solid #E5E7EB',
                                        padding: '8px',
                                        zIndex: 1000
                                    }}
                                >
                                    <div style={{ padding: '8px 12px', borderBottom: '1px solid #F3F4F6', marginBottom: '8px' }}>
                                        <p style={{ fontSize: '14px', fontWeight: '600', color: '#111827', margin: 0 }}>{user.fullName}</p>
                                        <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>{user.email}</p>
                                    </div>
                                    <button
                                        onClick={onLogout}
                                        style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '8px 12px',
                                            borderRadius: '6px',
                                            border: 'none',
                                            background: 'transparent',
                                            color: '#EF4444',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            cursor: 'pointer',
                                            textAlign: 'left'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = '#FEF2F2'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                    >
                                        <LogOut size={16} />
                                        Sign Out
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="mobile-menu-btn"
                        style={{
                            display: 'none',
                            background: 'transparent',
                            border: 'none',
                            color: '#374151',
                            cursor: 'pointer',
                            padding: '8px'
                        }}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            position: 'absolute',
                            top: '72px',
                            left: 0,
                            right: 0,
                            background: 'white',
                            borderBottom: '1px solid #E5E7EB',
                            overflow: 'hidden',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)'
                        }}
                        className="mobile-nav"
                    >
                        <div style={{ padding: '16px' }}>
                            {navItems.map(item => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        onNavigate(item.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    style={{
                                        width: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '12px',
                                        padding: '12px',
                                        borderRadius: '8px',
                                        border: 'none',
                                        background: currentPage === item.id ? '#EFF6FF' : 'transparent',
                                        color: currentPage === item.id ? '#2563EB' : '#4B5563',
                                        fontSize: '15px',
                                        fontWeight: currentPage === item.id ? '600' : '500',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        marginBottom: '4px'
                                    }}
                                >
                                    {item.icon}
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 1024px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-menu-btn {
                        display: block !important;
                    }
                    .user-info {
                        display: none !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
