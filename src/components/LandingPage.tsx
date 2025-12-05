import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { mockEvents, mockUsers, mockGalleryImages, mockPartners, mockPastEvents, mockTracks } from '../mockData';
import type { Event, User } from '../types';

// Components
import HeroSection from './landing/HeroSection';
import StatsCards from './landing/StatsCards';
import EventsSection from './landing/EventsSection';
import TracksSection from './landing/TracksSection';
import TeamSection from './landing/TeamSection';
import PartnersSection from './landing/PartnersSection';
import GallerySection from './landing/GallerySection';
import ContactSection from './landing/ContactSection';
import PastEventsSection from './landing/PastEventsSection';
import CTABanner from './landing/CTABanner';
import NewsletterCTA from './landing/NewsletterCTA';
import JoinTeamCTA from './landing/JoinTeamCTA';
import OrganizerProfile from './OrganizerProfile';

interface LandingPageProps {
    onLoginClick: () => void;
}

const LandingPage = ({ onLoginClick }: LandingPageProps) => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [selectedOrganizer, setSelectedOrganizer] = useState<User | null>(null);
    const [showCoC, setShowCoC] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const publicEvents = mockEvents
        .filter(e => e.status === 'published' && new Date(e.startAt) > new Date())
        .slice(0, 6);

    const pastEvents = mockEvents
        .filter(e => new Date(e.startAt) < new Date() && e.status !== 'cancelled')
        .slice(0, 3);

    const trackLeads = mockUsers.filter(u => u.role === 'track_lead');
    const execTeam = mockUsers.filter(u => u.role === 'executive_admin');

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
                alignItems: 'center',
                padding: '0 24px'
            }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img src="/logo.png" alt="JKUBS Logo" style={{ height: '40px' }} onError={(e) => e.currentTarget.style.display = 'none'} />
                        <span style={{ fontSize: '20px', fontWeight: '700', color: '#1A73E8' }}>JKUBS</span>
                    </div>

                    <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                        <a href="#" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Home</a>
                        <a href="#events" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Events</a>
                        <a href="#tracks" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Tracks</a>
                        <a href="#team" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Team</a>
                        <a href="#contact" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Contact</a>
                    </nav>

                    <div style={{ display: 'flex', gap: '16px' }}>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={onLoginClick}
                            style={{
                                padding: '8px 20px',
                                background: '#1A73E8',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: '600',
                                cursor: 'pointer'
                            }}
                        >
                            Member Login
                        </motion.button>
                    </div>
                </div>
            </header>

            <main>
                <HeroSection />
                <StatsCards />
                <EventsSection
                    events={publicEvents}
                    pastEvents={pastEvents}
                    onEventClick={setSelectedEvent}
                />
                <NewsletterCTA />
                <TracksSection tracks={mockTracks} />
                <JoinTeamCTA />
                <TeamSection executives={execTeam} trackLeads={trackLeads} />
                <PastEventsSection pastEvents={mockPastEvents} />
                <PartnersSection partners={mockPartners} />
                <CTABanner
                    title="Partner With JKUBS"
                    description="Collaborate with us to shape the future of biochemistry education and research in Kenya. Join leading institutions and organizations supporting our mission."
                    buttonText="Get in Touch"
                    buttonLink="/partner"
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
                            background: 'linear-gradient(135deg, #1A73E8 0%, #0B5FFF 100%)',
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
                                <button className="btn btn-primary" style={{ background: '#1A73E8', color: 'white' }}>RSVP Now</button>
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
                                <button className="btn btn-primary" style={{ background: '#1A73E8', color: 'white' }} onClick={() => setShowCoC(false)}>Close</button>
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
            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        style={{
                            position: 'fixed',
                            bottom: '32px',
                            right: '32px',
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: '#1A73E8',
                            color: 'white',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            zIndex: 1000
                        }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ArrowUp size={24} />
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default LandingPage;
