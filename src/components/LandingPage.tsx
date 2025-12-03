import { useState } from 'react';
import { motion } from 'framer-motion';
import { mockEvents, mockUsers, mockTracks, mockGalleryImages } from '../mockData';
import type { Event, User } from '../types';

// Components
import Hero from './landing/Hero';
import AboutSection from './landing/AboutSection';
import EventsSection from './landing/EventsSection';
import TracksSection from './landing/TracksSection';
import OrganizersSection from './landing/OrganizersSection';
import GallerySection from './landing/GallerySection';
import ContactSection from './landing/ContactSection';
import OrganizerProfile from './OrganizerProfile';

interface LandingPageProps {
    onLoginClick: () => void;
}

const LandingPage = ({ onLoginClick }: LandingPageProps) => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [selectedOrganizer, setSelectedOrganizer] = useState<User | null>(null);
    const [showCoC, setShowCoC] = useState(false);

    // Data filtering
    const publicEvents = mockEvents
        .filter(e => e.status === 'published' && new Date(e.startAt) > new Date())
        .slice(0, 3);

    const pastEvents = mockEvents
        .filter(e => new Date(e.startAt) < new Date() && e.status !== 'cancelled')
        .slice(0, 3);

    const trackLeads = mockUsers.filter(u => u.profile?.track);
    const execTeam = mockUsers.filter(u => ['chairman', 'secretary', 'treasurer'].includes(u.role));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ minHeight: '100vh', background: 'var(--color-white)' }}
        >
            {/* Public Header */}
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid #E5E7EB',
                zIndex: 1000,
                height: '72px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    maxWidth: '1280px',
                    margin: '0 auto',
                    padding: '0 24px'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
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

                    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                        <nav className="hidden md:flex" style={{ gap: '8px' }}>
                            {['Events', 'Tracks', 'Organizers', 'Photos'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    style={{
                                        color: '#4B5563',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        fontSize: '14px',
                                        padding: '8px 16px',
                                        borderRadius: '8px',
                                        transition: 'all 0.2s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#2563EB';
                                        e.currentTarget.style.background = '#EFF6FF';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '#4B5563';
                                        e.currentTarget.style.background = 'transparent';
                                    }}
                                >
                                    {item}
                                </a>
                            ))}
                        </nav>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={onLoginClick}
                            style={{
                                padding: '10px 20px',
                                background: '#2563EB',
                                color: 'white',
                                borderRadius: '8px',
                                fontSize: '14px',
                                fontWeight: '600',
                                border: 'none',
                                cursor: 'pointer',
                                boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
                            }}
                        >
                            Member Login
                        </motion.button>
                    </div>
                </div>
            </header>

            <main>
                <Hero />
                <AboutSection />
                <EventsSection
                    events={publicEvents}
                    pastEvents={pastEvents}
                    onEventClick={setSelectedEvent}
                />
                <TracksSection tracks={mockTracks} />
                <OrganizersSection
                    execTeam={execTeam}
                    trackLeads={trackLeads}
                    onOrganizerClick={setSelectedOrganizer}
                />
                <GallerySection images={mockGalleryImages} />
                <ContactSection />
            </main>

            {/* Footer */}
            <footer style={{ background: '#111827', color: 'white', padding: '60px 0' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '40px',
                        marginBottom: '60px'
                    }}>
                        <div>
                            <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>JKUBS</div>
                            <p style={{ color: '#9CA3AF', lineHeight: 1.6 }}>
                                Empowering the next generation of biochemists through innovation, research, and community.
                            </p>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'white' }}>Quick Links</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <a href="#about" style={{ color: '#9CA3AF', textDecoration: 'none' }}>About Us</a>
                                <a href="#events" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Events</a>
                                <a href="#tracks" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Research Tracks</a>
                                <a href="#contact" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Contact</a>
                            </div>
                        </div>

                        <div>
                            <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: 'white' }}>Legal</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <button onClick={() => setShowCoC(true)} style={{ background: 'none', border: 'none', color: '#9CA3AF', cursor: 'pointer', textAlign: 'left', padding: 0 }}>Code of Conduct</button>
                                <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Privacy Policy</a>
                                <a href="#" style={{ color: '#9CA3AF', textDecoration: 'none' }}>Terms of Service</a>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        borderTop: '1px solid #374151',
                        paddingTop: '32px',
                        textAlign: 'center',
                        color: '#6B7280',
                        fontSize: '14px'
                    }}>
                        &copy; {new Date().getFullYear()} JKUAT Biochemistry Society. All rights reserved.
                    </div>
                </div>
            </footer>

            {/* Event Details Modal */}
            {selectedEvent && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    padding: '20px'
                }} onClick={() => setSelectedEvent(null)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        className="card"
                        style={{
                            maxWidth: '600px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            padding: 0,
                            overflow: 'hidden'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div style={{
                            height: '200px',
                            background: 'var(--gradient-primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '64px',
                            color: 'white',
                        }}>
                            📅
                        </div>
                        <div style={{ padding: '32px' }}>
                            <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#111827', fontWeight: '700' }}>{selectedEvent.title}</h2>
                            <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', color: '#4B5563' }}>
                                <div>
                                    <strong style={{ color: '#111827' }}>Date:</strong><br />
                                    {new Date(selectedEvent.startAt).toLocaleDateString('en-US', { dateStyle: 'full' })}
                                </div>
                                <div>
                                    <strong style={{ color: '#111827' }}>Location:</strong><br />
                                    {selectedEvent.location}
                                </div>
                            </div>
                            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#4B5563', marginBottom: '32px' }}>
                                {selectedEvent.description}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
                                <button className="btn btn-ghost" onClick={() => setSelectedEvent(null)}>Close</button>
                                <button className="btn btn-primary bg-gradient-primary">RSVP Now</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Code of Conduct Modal */}
            {showCoC && (
                <div style={{
                    position: 'fixed',
                    inset: 0,
                    background: 'rgba(0,0,0,0.5)',
                    backdropFilter: 'blur(4px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    padding: '20px'
                }} onClick={() => setShowCoC(false)}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="card"
                        style={{
                            maxWidth: '600px',
                            width: '100%',
                            maxHeight: '90vh',
                            overflowY: 'auto',
                            padding: '32px'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <h2 style={{ fontSize: '28px', marginBottom: '24px', color: '#111827', fontWeight: '700' }}>Code of Conduct</h2>
                        <div style={{ color: '#4B5563', lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>
                                JKUBS is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, or religion.
                            </p>
                            <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '8px', color: '#111827' }}>Our Pledge</h3>
                            <p style={{ marginBottom: '16px' }}>
                                In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone.
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                                <button className="btn btn-primary" onClick={() => setShowCoC(false)}>Close</button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}

            {/* Organizer Profile Modal */}
            {selectedOrganizer && (
                <OrganizerProfile
                    organizer={selectedOrganizer}
                    onClose={() => setSelectedOrganizer(null)}
                />
            )}
        </motion.div>
    );
};

export default LandingPage;
