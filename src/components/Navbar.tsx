import { useState } from 'react';
import type { User } from '../types';

interface NavbarProps {
    user: User;
    currentPage: string;
    onNavigate: (page: string) => void;
    onLogout: () => void;
}

const Navbar = ({ user, currentPage, onNavigate, onLogout }: NavbarProps) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊', roles: ['all'] },
        { id: 'events', label: 'Events', icon: '📅', roles: ['all'] },
        { id: 'members', label: 'Members', icon: '👥', roles: ['all'] },
        { id: 'payments', label: 'Payments', icon: '💰', roles: ['treasurer', 'admin', 'chairman'] },
        { id: 'announcements', label: 'Announcements', icon: '📢', roles: ['secretary', 'admin', 'chairman'] },
        { id: 'committees', label: 'Committees', icon: '👔', roles: ['secretary', 'admin', 'chairman'] },
    ].filter(item => item.roles.includes('all') || item.roles.includes(user.role));

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            background: 'linear-gradient(135deg, var(--color-primary-blue) 0%, var(--color-secondary-blue) 100%)',
            boxShadow: 'var(--shadow-lg)',
            zIndex: 999,
        }}>
            <div className="container" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 'var(--space-4) var(--space-6)',
                minHeight: '70px'
            }}>
                {/* Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        background: 'var(--color-white)',
                        borderRadius: 'var(--radius-lg)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '24px',
                        fontWeight: 'var(--font-weight-bold)',
                        color: 'var(--color-primary-blue)',
                    }}>
                        JK
                    </div>
                    <div>
                        <h1 style={{
                            fontSize: '20px',
                            fontWeight: 'var(--font-weight-bold)',
                            color: 'var(--color-white)',
                            margin: 0,
                            lineHeight: 1.2
                        }}>
                            JKUBS
                        </h1>
                        <p style={{
                            fontSize: 'var(--font-size-xs)',
                            color: 'rgba(255,255,255,0.9)',
                            margin: 0
                        }}>
                            Biochemistry Society
                        </p>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div style={{
                    display: 'flex',
                    gap: 'var(--space-2)',
                    alignItems: 'center'
                }} className="desktop-nav">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => onNavigate(item.id)}
                            className="btn btn-ghost"
                            style={{
                                color: currentPage === item.id ? 'var(--color-white)' : 'rgba(255,255,255,0.8)',
                                background: currentPage === item.id ? 'rgba(255,255,255,0.15)' : 'transparent',
                                padding: 'var(--space-2) var(--space-4)',
                                fontSize: 'var(--font-size-small)',
                                fontWeight: currentPage === item.id ? 'var(--font-weight-bold)' : 'var(--font-weight-regular)',
                            }}
                        >
                            <span style={{ marginRight: 'var(--space-1)' }}>{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* User Menu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-3)',
                        padding: 'var(--space-2) var(--space-4)',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: 'var(--radius-full)',
                    }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'var(--color-white)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            fontWeight: 'var(--font-weight-bold)',
                            color: 'var(--color-primary-blue)',
                        }}>
                            {user.fullName.charAt(0)}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{
                                color: 'var(--color-white)',
                                fontSize: 'var(--font-size-small)',
                                fontWeight: 'var(--font-weight-medium)'
                            }}>
                                {user.fullName}
                            </span>
                            <span style={{
                                color: 'rgba(255,255,255,0.8)',
                                fontSize: 'var(--font-size-xs)',
                                textTransform: 'capitalize'
                            }}>
                                {user.role}
                            </span>
                        </div>
                    </div>

                    <button
                        onClick={onLogout}
                        className="btn btn-ghost"
                        style={{
                            color: 'var(--color-white)',
                            padding: 'var(--space-2) var(--space-4)',
                        }}
                        title="Logout"
                    >
                        🚪
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="btn btn-ghost mobile-menu-btn"
                    style={{
                        display: 'none',
                        color: 'var(--color-white)',
                    }}
                >
                    {mobileMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div style={{
                    background: 'var(--color-white)',
                    borderTop: '1px solid rgba(11, 95, 255, 0.1)',
                }} className="mobile-nav">
                    {navItems.map(item => (
                        <button
                            key={item.id}
                            onClick={() => {
                                onNavigate(item.id);
                                setMobileMenuOpen(false);
                            }}
                            style={{
                                width: '100%',
                                padding: 'var(--space-4)',
                                textAlign: 'left',
                                background: currentPage === item.id ? 'var(--color-light-gray)' : 'transparent',
                                color: currentPage === item.id ? 'var(--color-primary-blue)' : 'var(--color-neutral-dark)',
                                border: 'none',
                                borderBottom: '1px solid var(--color-light-gray)',
                                cursor: 'pointer',
                                fontSize: 'var(--font-size-body)',
                                fontWeight: currentPage === item.id ? 'var(--font-weight-bold)' : 'var(--font-weight-regular)',
                            }}
                        >
                            <span style={{ marginRight: 'var(--space-2)' }}>{item.icon}</span>
                            {item.label}
                        </button>
                    ))}
                </div>
            )}

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
