import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, CheckCircle } from 'lucide-react';
import type { Event } from '../../types';

interface PastEventsSectionProps {
    pastEvents: Event[];
}

const PastEventsSection = ({ pastEvents }: PastEventsSectionProps) => {
    return (
        <section style={{
            padding: '80px 0',
            background: 'white'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
                    <span style={{
                        color: '#1A73E8',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontSize: '14px'
                    }}>
                        Our Impact
                    </span>
                    <h2 style={{
                        fontSize: '42px',
                        fontWeight: '800',
                        color: '#111827',
                        marginTop: '12px',
                        marginBottom: '16px'
                    }}>
                        Past Events & Achievements
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#6B7280',
                        lineHeight: 1.6
                    }}>
                        Explore our successful events and the impact we've made in the biochemistry community.
                    </p>
                </div>

                {/* Events Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                    gap: '32px'
                }}>
                    {pastEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'white',
                                borderRadius: '16px',
                                overflow: 'hidden',
                                border: '1px solid #E5E7EB',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.05)';
                            }}
                        >
                            {/* Event Image Placeholder */}
                            <div style={{
                                height: '200px',
                                background: event.eventType === 'Field Visit'
                                    ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                                    : event.eventType === 'Workshop'
                                        ? 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
                                        : event.eventType === 'Seminar'
                                            ? 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
                                            : 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '48px',
                                position: 'relative'
                            }}>
                                {event.eventType === 'Field Visit' && '🏢'}
                                {event.eventType === 'Workshop' && '🔬'}
                                {event.eventType === 'Seminar' && '🎤'}
                                {event.eventType === 'Info Session' && '💡'}
                                {event.eventType === 'Social' && '🎉'}

                                {/* Success Badge */}
                                <div style={{
                                    position: 'absolute',
                                    top: '16px',
                                    right: '16px',
                                    background: 'rgba(255, 255, 255, 0.95)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '8px 16px',
                                    borderRadius: '24px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '6px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: '#059669'
                                }}>
                                    <CheckCircle size={16} />
                                    Completed
                                </div>
                            </div>

                            {/* Event Content */}
                            <div style={{ padding: '24px' }}>
                                {/* Event Type Badge */}
                                <div style={{
                                    display: 'inline-block',
                                    padding: '6px 12px',
                                    background: '#EEF2FF',
                                    color: '#4F46E5',
                                    borderRadius: '6px',
                                    fontSize: '12px',
                                    fontWeight: '600',
                                    marginBottom: '12px'
                                }}>
                                    {event.eventType}
                                </div>

                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    color: '#111827',
                                    marginBottom: '12px',
                                    lineHeight: 1.3
                                }}>
                                    {event.title}
                                </h3>

                                <p style={{
                                    fontSize: '14px',
                                    color: '#6B7280',
                                    marginBottom: '16px',
                                    lineHeight: 1.6
                                }}>
                                    {event.description.substring(0, 100)}...
                                </p>

                                {/* Event Meta */}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    paddingTop: '16px',
                                    borderTop: '1px solid #E5E7EB'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '14px',
                                        color: '#6B7280'
                                    }}>
                                        <Calendar size={16} />
                                        {new Date(event.startAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>

                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        fontSize: '14px',
                                        color: '#6B7280'
                                    }}>
                                        <MapPin size={16} />
                                        {event.location}
                                    </div>

                                    {event.attendeeCount && (
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            fontSize: '14px',
                                            color: '#059669',
                                            fontWeight: '600'
                                        }}>
                                            <Users size={16} />
                                            {event.attendeeCount} attendees
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div style={{ textAlign: 'center', marginTop: '48px' }}>
                    <a
                        href="/events"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '14px 28px',
                            background: 'white',
                            color: '#1A73E8',
                            borderRadius: '12px',
                            fontWeight: '600',
                            fontSize: '16px',
                            textDecoration: 'none',
                            border: '2px solid #1A73E8',
                            transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#1A73E8';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.color = '#1A73E8';
                        }}
                    >
                        View All Events
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PastEventsSection;
