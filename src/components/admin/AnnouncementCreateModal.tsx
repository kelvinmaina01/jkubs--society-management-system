import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Type, AlignLeft, Pin } from 'lucide-react';
import type { Announcement } from '../../types';

interface AnnouncementCreateModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (announcementData: Partial<Announcement>) => void;
}

const AnnouncementCreateModal = ({ isOpen, onClose, onSubmit }: AnnouncementCreateModalProps) => {
    const [formData, setFormData] = useState({
        title: '',
        body: '',
        pinned: false
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({
            ...formData,
            publishedAt: new Date().toISOString()
        });
        onClose();
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
                            maxWidth: '500px',
                            background: 'white',
                            borderRadius: '16px',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            zIndex: 1001
                        }}
                    >
                        <div style={{ padding: '24px', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: 0 }}>New Announcement</h2>
                            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {/* Title */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                        Title
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <Type size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#9CA3AF' }} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.title}
                                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                                            placeholder="e.g., General Meeting Reminder"
                                            style={{
                                                width: '100%',
                                                padding: '10px 12px 10px 40px',
                                                borderRadius: '8px',
                                                border: '1px solid #D1D5DB',
                                                fontSize: '14px'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Body */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                        Content
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <AlignLeft size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#9CA3AF' }} />
                                        <textarea
                                            required
                                            value={formData.body}
                                            onChange={e => setFormData({ ...formData, body: e.target.value })}
                                            placeholder="Write your announcement here..."
                                            rows={6}
                                            style={{
                                                width: '100%',
                                                padding: '10px 12px 10px 40px',
                                                borderRadius: '8px',
                                                border: '1px solid #D1D5DB',
                                                fontSize: '14px',
                                                resize: 'vertical'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Pinned Toggle */}
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, pinned: !formData.pinned })}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '8px 16px',
                                            borderRadius: '20px',
                                            border: formData.pinned ? '1px solid #2563EB' : '1px solid #D1D5DB',
                                            background: formData.pinned ? '#EFF6FF' : 'white',
                                            color: formData.pinned ? '#2563EB' : '#6B7280',
                                            cursor: 'pointer',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        <Pin size={16} fill={formData.pinned ? 'currentColor' : 'none'} />
                                        {formData.pinned ? 'Pinned to Top' : 'Pin Announcement'}
                                    </button>
                                </div>
                            </div>

                            <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: '8px',
                                        border: '1px solid #D1D5DB',
                                        background: 'white',
                                        color: '#374151',
                                        fontWeight: '600',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    style={{
                                        padding: '10px 20px',
                                        borderRadius: '8px',
                                        border: 'none',
                                        background: '#2563EB',
                                        color: 'white',
                                        fontWeight: '600',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Post Announcement
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AnnouncementCreateModal;
