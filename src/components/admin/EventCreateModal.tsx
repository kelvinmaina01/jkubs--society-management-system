import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, MapPin, Type, AlignLeft } from 'lucide-react';
import type { Event } from '../../types';

interface EventCreateModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (eventData: Partial<Event>) => void;
}

const EventCreateModal = ({ isOpen, onClose, onSubmit }: EventCreateModalProps) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        startAt: '',
        endAt: '',
        location: '',
        type: 'workshop',
        capacity: '',
        price: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { price, capacity, ...otherData } = formData;
        onSubmit({
            ...otherData,
            status: 'draft',
            capacity: capacity ? parseInt(capacity) : undefined,
            price: price ? parseInt(price) : 0,
            currency: 'KES'
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
                            maxWidth: '600px',
                            background: 'white',
                            borderRadius: '16px',
                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                            zIndex: 1001,
                            maxHeight: '90vh',
                            overflowY: 'auto'
                        }}
                    >
                        <div style={{ padding: '24px', borderBottom: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#111827', margin: 0 }}>Create New Event</h2>
                            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6B7280' }}>
                                <X size={24} />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {/* Title */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                        Event Title
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <Type size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#9CA3AF' }} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.title}
                                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                                            placeholder="e.g., Annual Biochemistry Symposium"
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

                                {/* Type & Capacity */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                            Event Type
                                        </label>
                                        <select
                                            value={formData.type}
                                            onChange={e => setFormData({ ...formData, type: e.target.value })}
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                borderRadius: '8px',
                                                border: '1px solid #D1D5DB',
                                                fontSize: '14px',
                                                background: 'white'
                                            }}
                                        >
                                            <option value="workshop">Workshop</option>
                                            <option value="seminar">Seminar</option>
                                            <option value="social">Social</option>
                                            <option value="conference">Conference</option>
                                            <option value="academic trip">Academic Trip</option>
                                            <option> </option>
                                        </select>
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                            Capacity (Optional)
                                        </label>
                                        <input
                                            type="number"
                                            value={formData.capacity}
                                            onChange={e => setFormData({ ...formData, capacity: e.target.value })}
                                            placeholder="Max attendees"
                                            style={{
                                                width: '100%',
                                                padding: '10px',
                                                borderRadius: '8px',
                                                border: '1px solid #D1D5DB',
                                                fontSize: '14px'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Price */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                        Price (KES) - Optional
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <span style={{ position: 'absolute', left: '12px', top: '10px', color: '#9CA3AF', fontSize: '14px' }}>KES</span>
                                        <input
                                            type="number"
                                            value={formData.price}
                                            onChange={e => setFormData({ ...formData, price: e.target.value })}
                                            placeholder="0 for free events"
                                            style={{
                                                width: '100%',
                                                padding: '10px 12px 10px 45px',
                                                borderRadius: '8px',
                                                border: '1px solid #D1D5DB',
                                                fontSize: '14px'
                                            }}
                                        />
                                    </div>
                                </div>

                                {/* Date & Time */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                            Start Date & Time
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <Calendar size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#9CA3AF' }} />
                                            <input
                                                type="datetime-local"
                                                required
                                                value={formData.startAt}
                                                onChange={e => setFormData({ ...formData, startAt: e.target.value })}
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
                                    <div>
                                        <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                            End Date & Time
                                        </label>
                                        <div style={{ position: 'relative' }}>
                                            <Clock size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#9CA3AF' }} />
                                            <input
                                                type="datetime-local"
                                                required
                                                value={formData.endAt}
                                                onChange={e => setFormData({ ...formData, endAt: e.target.value })}
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
                                </div>

                                {/* Location */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                        Location
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <MapPin size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#9CA3AF' }} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.location}
                                            onChange={e => setFormData({ ...formData, location: e.target.value })}
                                            placeholder="e.g., Science Complex, Room 101"
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

                                {/* Description */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px' }}>
                                        Description
                                    </label>
                                    <div style={{ position: 'relative' }}>
                                        <AlignLeft size={18} style={{ position: 'absolute', left: '12px', top: '12px', color: '#9CA3AF' }} />
                                        <textarea
                                            required
                                            value={formData.description}
                                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                                            placeholder="Provide details about the event..."
                                            rows={4}
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
                                    Create Event
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default EventCreateModal;
