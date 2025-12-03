import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight, Clock } from 'lucide-react';
import type { Event } from '../../types';

interface EventsSectionProps {
    events: Event[];
    pastEvents: Event[];
    onEventClick: (event: Event) => void;
}

const EventsSection = ({ events, pastEvents, onEventClick }: EventsSectionProps) => {
    return (
        <section id="events" style={{ padding: '100px 0', background: '#F9FAFB' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '40px' }}>
                    <div>
                        <span style={{
                            color: 'var(--color-primary-blue)',
                            fontWeight: '600',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            fontSize: '14px'
                        }}>
                            Calendar
                        </span>
                        <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', marginTop: '8px' }}>
                            Upcoming Events
                        </h2>
                    </div>
                    <a href="#" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        View all events <ArrowRight size={16} />
                    </a>
                </div>

                <div className="grid grid-cols-3" style={{ gap: '32px', marginBottom: '80px' }}>
                    {events.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="card"
                            style={{
                                padding: 0,
                                overflow: 'hidden',
                                border: 'none',
                                boxShadow: 'var(--shadow-lg)',
                                cursor: 'pointer',
                                background: 'white'
                            }}
                            onClick={() => onEventClick(event)}
                        >
                            <div style={{
                                height: '200px',
                                background: 'var(--gradient-primary)',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Calendar size={64} color="white" style={{ opacity: 0.8 }} />
                                <div style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    background: 'rgba(255,255,255,0.9)',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '12px',
                                    fontWeight: '700',
                                    color: 'var(--color-primary-blue)'
                                }}>
                                    {event.eventType}
                                </div>
                            </div>

                            <div style={{ padding: '24px' }}>
                                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                                    <div style={{ textAlign: 'center', minWidth: '50px' }}>
                                        <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-primary-blue)', textTransform: 'uppercase' }}>
                                            {new Date(event.startAt).toLocaleDateString('en-US', { month: 'short' })}
                                        </div>
                                        <div style={{ fontSize: '24px', fontWeight: '800', color: '#111827' }}>
                                            {new Date(event.startAt).getDate()}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: '#111827', lineHeight: 1.4 }}>
                                            {event.title}
                                        </h3>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6B7280', fontSize: '14px', marginBottom: '4px' }}>
                                            <Clock size={14} />
                                            {new Date(event.startAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#6B7280', fontSize: '14px' }}>
                                            <MapPin size={14} />
                                            {event.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Past Events */}
                <div id="past-events">
                    <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', marginBottom: '40px' }}>
                        Past Highlights
                    </h2>
                    <div className="grid grid-cols-3" style={{ gap: '32px' }}>
                        {pastEvents.map((event, index) => (
                            <motion.div
                                key={event.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="card"
                                style={{
                                    display: 'flex',
                                    gap: '16px',
                                    padding: '16px',
                                    alignItems: 'center',
                                    background: 'white'
                                }}
                            >
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '12px',
                                    background: '#F3F4F6',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: '#9CA3AF'
                                }}>
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#374151', marginBottom: '4px' }}>
                                        {event.title}
                                    </h4>
                                    <p style={{ fontSize: '13px', color: '#6B7280' }}>
                                        {new Date(event.startAt).toLocaleDateString('en-US', { dateStyle: 'medium' })}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
