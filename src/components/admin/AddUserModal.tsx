import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, User as UserIcon, Mail, Lock, Briefcase, ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import type { User, UserRole } from '../../types';
import { mockTracks } from '../../mockData';

interface AddUserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAddUser: (userData: Partial<User>) => void;
}

const AddUserModal = ({ isOpen, onClose, onAddUser }: AddUserModalProps) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        role: 'member' as UserRole,
        trackId: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onAddUser(formData);
        onClose();
        setFormData({ fullName: '', email: '', password: '', role: 'member', trackId: '' });
    };

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(4px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                style={{
                    background: 'var(--color-surface)',
                    borderRadius: '16px',
                    width: '100%',
                    maxWidth: '500px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                    overflow: 'hidden'
                }}
            >
                <div style={{
                    padding: '20px',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Add New User</h2>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-secondary)' }}>
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-text-primary)' }}>Full Name</label>
                        <div style={{ position: 'relative' }}>
                            <UserIcon size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
                            <input
                                type="text"
                                required
                                value={formData.fullName}
                                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                                placeholder="John Doe"
                                style={{
                                    width: '100%',
                                    padding: '10px 10px 10px 40px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg-secondary)',
                                    color: 'var(--color-text-primary)'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-text-primary)' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                                style={{
                                    width: '100%',
                                    padding: '10px 10px 10px 40px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg-secondary)',
                                    color: 'var(--color-text-primary)'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-text-primary)' }}>Initial Password</label>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
                            <input
                                type="text"
                                required
                                value={formData.password}
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                                placeholder="Generate or type password"
                                style={{
                                    width: '100%',
                                    padding: '10px 10px 10px 40px',
                                    borderRadius: '8px',
                                    border: '1px solid var(--color-border)',
                                    background: 'var(--color-bg-secondary)',
                                    color: 'var(--color-text-primary)'
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-text-primary)' }}>Role</label>
                            <div style={{ position: 'relative' }}>
                                <Briefcase size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
                                <select
                                    value={formData.role}
                                    onChange={e => setFormData({ ...formData, role: e.target.value as UserRole })}
                                    style={{
                                        width: '100%',
                                        padding: '10px 10px 10px 40px',
                                        borderRadius: '8px',
                                        border: '1px solid var(--color-border)',
                                        background: 'var(--color-bg-secondary)',
                                        color: 'var(--color-text-primary)',
                                        appearance: 'none'
                                    }}
                                >
                                    <option value="member">Member</option>
                                    <option value="track_lead">Track Lead</option>
                                    <option value="executive_admin">Executive Admin</option>
                                    <option value="super_admin">Super Admin</option>
                                    <option value="event_coordinator">Event Coordinator</option>
                                </select>
                                <ChevronDown size={16} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)', pointerEvents: 'none' }} />
                            </div>
                        </div>

                        {formData.role === 'track_lead' && (
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: 'var(--color-text-primary)' }}>Track</label>
                                <div style={{ position: 'relative' }}>
                                    <select
                                        value={formData.trackId}
                                        onChange={e => setFormData({ ...formData, trackId: e.target.value })}
                                        required
                                        style={{
                                            width: '100%',
                                            padding: '10px',
                                            borderRadius: '8px',
                                            border: '1px solid var(--color-border)',
                                            background: 'var(--color-bg-secondary)',
                                            color: 'var(--color-text-primary)',
                                            appearance: 'none'
                                        }}
                                    >
                                        <option value="">Select Track</option>
                                        {mockTracks.map(track => (
                                            <option key={track.id} value={track.title}>{track.title}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={16} style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)', pointerEvents: 'none' }} />
                                </div>
                            </div>
                        )}
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '16px' }}>
                        <Button variant="ghost" onClick={onClose} type="button">Cancel</Button>
                        <Button type="submit">Create User</Button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
};

export default AddUserModal;
