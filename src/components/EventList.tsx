import { useState } from 'react';
import { mockEvents } from '../mockData';
import type { Event } from '../types';
import EventCreateModal from './admin/EventCreateModal';
import PaymentModal from './PaymentModal';

interface EventListProps {
    onRSVP?: (eventId: string) => void;
}

const EventList = ({ onRSVP }: EventListProps) => {
    const [rsvpedEvents, setRsvpedEvents] = useState<string[]>([]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [paymentModalOpen, setPaymentModalOpen] = useState(false);
    const [selectedEventForPayment, setSelectedEventForPayment] = useState<Event | null>(null);

    const handleRSVP = (event: Event) => {
        if (rsvpedEvents.includes(event.id)) {
            // Cancel RSVP
            setRsvpedEvents(prev => prev.filter(id => id !== event.id));
        } else {
            // Check if payment is required
            if (event.price && event.price > 0) {
                setSelectedEventForPayment(event);
                setPaymentModalOpen(true);
            } else {
                // Free event, direct RSVP
                completeRSVP(event.id);
            }
        }
    };

    const completeRSVP = (eventId: string) => {
        setRsvpedEvents(prev => [...prev, eventId]);
        if (onRSVP) onRSVP(eventId);
    };

    const handlePaymentSuccess = () => {
        if (selectedEventForPayment) {
            completeRSVP(selectedEventForPayment.id);
            setSelectedEventForPayment(null);
        }
    };

    const handleCreateEvent = (eventData: Partial<Event>) => {
        console.log('Creating event:', eventData);
        // In a real app, this would make an API call
        // For now, we'll just close the modal
        setIsCreateModalOpen(false);
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const formatTime = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getStatusBadge = (status: Event['status']) => {
        const badges = {
            published: <span className="badge badge-success">✓ Published</span>,
            draft: <span className="badge badge-warning">📝 Draft</span>,
            cancelled: <span className="badge badge-error">✕ Cancelled</span>,
            completed: <span className="badge badge-info">✓ Completed</span>,
        };
        return badges[status];
    };

    return (
        <div className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 'var(--space-8)'
            }}>
                <div>
                    <h1 style={{
                        fontSize: 'var(--font-size-h1)',
                        fontWeight: 'var(--font-weight-bold)',
                        marginBottom: 'var(--space-2)'
                    }}>
                        📅 Events
                    </h1>
                    <p style={{ color: '#6B7280' }}>
                        View and manage society events
                    </p>
                </div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="btn btn-primary btn-lg"
                >
                    ➕ Create Event
                </button>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-2" style={{ gap: 'var(--space-6)' }}>
                {mockEvents.map(event => {
                    const isRsvped = rsvpedEvents.includes(event.id);

                    return (
                        <div key={event.id} className="card" style={{
                            cursor: 'pointer',
                            transition: 'all var(--transition-base)',
                        }}>
                            {/* Event Image Placeholder */}
                            <div style={{
                                height: '200px',
                                background: `linear-gradient(135deg, ${event.status === 'published' ? 'var(--color-primary-blue)' : '#9CA3AF'
                                    } 0%, ${event.status === 'published' ? 'var(--color-secondary-blue)' : '#6B7280'
                                    } 100%)`,
                                borderRadius: 'var(--radius-md)',
                                marginBottom: 'var(--space-4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '48px',
                            }}>
                                📅
                            </div>

                            {/* Event Details */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                justifyContent: 'space-between',
                                marginBottom: 'var(--space-3)'
                            }}>
                                <h3 style={{
                                    fontSize: 'var(--font-size-h3)',
                                    fontWeight: 'var(--font-weight-bold)',
                                    margin: 0,
                                    flex: 1
                                }}>
                                    {event.title}
                                </h3>
                                {getStatusBadge(event.status)}
                            </div>

                            <p style={{
                                fontSize: 'var(--font-size-small)',
                                color: '#6B7280',
                                marginBottom: 'var(--space-4)',
                                lineHeight: 1.6
                            }}>
                                {event.description.substring(0, 150)}...
                            </p>

                            {/* Event Meta */}
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 'var(--space-2)',
                                marginBottom: 'var(--space-4)',
                                padding: 'var(--space-4)',
                                background: 'var(--color-light-gray)',
                                borderRadius: 'var(--radius-md)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                                    <span>📅</span>
                                    <span style={{ fontSize: 'var(--font-size-small)', color: '#6B7280' }}>
                                        {formatDate(event.startAt)}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                                    <span>⏰</span>
                                    <span style={{ fontSize: 'var(--font-size-small)', color: '#6B7280' }}>
                                        {formatTime(event.startAt)} - {formatTime(event.endAt)}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                                    <span>📍</span>
                                    <span style={{ fontSize: 'var(--font-size-small)', color: '#6B7280' }}>
                                        {event.location}
                                    </span>
                                </div>
                                {event.capacity && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                                        <span>👥</span>
                                        <span style={{ fontSize: 'var(--font-size-small)', color: '#6B7280' }}>
                                            Capacity: {event.capacity} people
                                        </span>
                                    </div>
                                )}
                                {event.price && event.price > 0 && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                                        <span>💰</span>
                                        <span style={{ fontSize: 'var(--font-size-small)', color: '#059669', fontWeight: '600' }}>
                                            KES {event.price.toLocaleString()}
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* Event Stats */}
                            <div style={{
                                display: 'flex',
                                gap: 'var(--space-4)',
                                marginBottom: 'var(--space-4)'
                            }}>
                                {event.rsvpCount !== undefined && (
                                    <span className="badge badge-primary" style={{ padding: 'var(--space-2) var(--space-4)' }}>
                                        {event.rsvpCount + (isRsvped ? 1 : 0)} RSVPs
                                    </span>
                                )}
                                {event.attendeeCount !== undefined && event.attendeeCount > 0 && (
                                    <span className="badge badge-success" style={{ padding: 'var(--space-2) var(--space-4)' }}>
                                        {event.attendeeCount} Attended
                                    </span>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div style={{
                                display: 'flex',
                                gap: 'var(--space-3)',
                                paddingTop: 'var(--space-4)',
                                borderTop: '1px solid var(--color-light-gray)'
                            }}>
                                {event.status === 'published' && new Date(event.startAt) > new Date() && (
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleRSVP(event);
                                        }}
                                        className={`btn ${isRsvped ? 'btn-success' : 'btn-primary'}`}
                                        style={{ flex: 1 }}
                                    >
                                        {isRsvped ? '✓ Registered' : (event.price && event.price > 0 ? `Pay KES ${event.price}` : 'RSVP Now')}
                                    </button>
                                )}
                                <button className="btn btn-outline" style={{ flex: 1 }}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            <EventCreateModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSubmit={handleCreateEvent}
            />

            {/* Payment Modal */}
            {selectedEventForPayment && (
                <PaymentModal
                    isOpen={paymentModalOpen}
                    onClose={() => setPaymentModalOpen(false)}
                    onSuccess={handlePaymentSuccess}
                    amount={selectedEventForPayment.price || 0}
                    eventName={selectedEventForPayment.title}
                />
            )}
        </div>
    );
};

export default EventList;
