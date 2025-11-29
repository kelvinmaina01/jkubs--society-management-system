import { useState } from 'react';
import { mockEvents, mockUsers, mockTracks, mockGalleryImages } from '../mockData';
import type { Event, User } from '../types';
import OrganizerProfile from './OrganizerProfile';

interface LandingPageProps {
    onLoginClick: () => void;
}

const LandingPage = ({ onLoginClick }: LandingPageProps) => {
    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
    const [selectedOrganizer, setSelectedOrganizer] = useState<User | null>(null);
    const [contactFormStatus, setContactFormStatus] = useState<'idle' | 'success'>('idle');
    const [hasJoined, setHasJoined] = useState(false);
    const [showMorePastEvents, setShowMorePastEvents] = useState(false);

    const publicEvents = mockEvents
        .filter(e => e.status === 'published' && new Date(e.startAt) > new Date())
        .slice(0, 3);

    const allPastEvents = mockEvents
        .filter(e => new Date(e.startAt) < new Date() && e.status !== 'cancelled');
    const pastEvents = showMorePastEvents ? allPastEvents : allPastEvents.slice(0, 3);

    const trackLeads = mockUsers.filter(u => u.profile?.track);
    const execTeam = mockUsers.filter(u => ['chairman', 'secretary', 'treasurer'].includes(u.role));

    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setContactFormStatus('success');
        setTimeout(() => setContactFormStatus('idle'), 3000);
    };

    const [showCoC, setShowCoC] = useState(false);

    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-white)', fontFamily: "'Google Sans', Roboto, Arial, sans-serif" }}>
            {/* ... (existing header and sections) ... */}

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
                    width: '100%'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'var(--color-primary-blue)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: '18px'
                        }}>
                            JK
                        </div>
                        <span style={{ fontSize: '22px', fontWeight: '500', color: '#202124' }}>
                            JKUBS
                        </span>
                    </div>

                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <a href="#events" style={{ color: '#5F6368', textDecoration: 'none', fontWeight: 500 }}>Events</a>
                        <a href="#tracks" style={{ color: '#5F6368', textDecoration: 'none', fontWeight: 500 }}>Tracks</a>
                        <a href="#organizers" style={{ color: '#5F6368', textDecoration: 'none', fontWeight: 500 }}>Organizers</a>
                        <a href="#photos" style={{ color: '#5F6368', textDecoration: 'none', fontWeight: 500 }}>Photos</a>
                        <button
                            onClick={onLoginClick}
                            className="btn btn-primary"
                            style={{ borderRadius: '4px', fontWeight: 500 }}
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section style={{
                paddingTop: '120px',
                paddingBottom: '60px',
                background: 'white',
                borderBottom: '1px solid #E5E7EB'
            }}>
                <div className="container">
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: '400',
                        marginBottom: '16px',
                        color: '#202124',
                        lineHeight: 1.2
                    }}>
                        JKUAT Biochemistry Society
                    </h1>
                    <div style={{ fontSize: '18px', color: '#5F6368', marginBottom: '24px', fontWeight: 400 }}>
                        120 Members
                    </div>

                    <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', alignItems: 'center', marginBottom: '32px' }}>
                        <button
                            onClick={() => setHasJoined(!hasJoined)}
                            className="btn"
                            style={{
                                borderRadius: '24px',
                                padding: '10px 24px',
                                fontSize: '15px',
                                fontWeight: 500,
                                background: hasJoined ? 'white' : '#1A73E8',
                                color: hasJoined ? '#1A73E8' : 'white',
                                border: hasJoined ? '1px solid #1A73E8' : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {hasJoined ? 'Joined' : 'Join us'}
                        </button>
                        <a href="https://twitter.com/jkubs" target="_blank" rel="noopener noreferrer" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid #DADCE0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#5F6368',
                            textDecoration: 'none',
                            fontSize: '16px'
                        }}>𝕏</a>
                        <a href="mailto:info@jkubs.org" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '1px solid #DADCE0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#5F6368',
                            textDecoration: 'none',
                            fontSize: '16px'
                        }}>✉️</a>
                    </div>

                    {/* Secondary Navigation */}
                    <nav style={{ display: 'flex', justifyContent: 'center', gap: '32px', borderTop: '1px solid #E5E7EB', paddingTop: '20px' }}>
                        <a href="#about" style={{ color: '#5F6368', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>About</a>
                        <a href="#events" style={{ color: '#5F6368', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Upcoming Events</a>
                        <a href="#past-events" style={{ color: '#5F6368', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Past Events</a>
                        <a href="#organizers" style={{ color: '#5F6368', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Organizers</a>
                        <a href="#photos" style={{ color: '#5F6368', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Photos</a>
                        <a href="#video" style={{ color: '#5F6368', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Video</a>
                    </nav>
                </div>
            </section>

            {/* About Section */}
            <section id="about" style={{ padding: '60px 0', background: 'white' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ fontSize: '24px', fontWeight: '400', color: '#202124', marginBottom: '16px' }}>
                        About
                    </h2>
                    <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#5F6368', marginBottom: '16px' }}>
                        The JKUAT Biochemistry Society (JKUBS) is a student-led organization dedicated to advancing the study and application of biochemistry and molecular biology. We bring together students, researchers, and professionals passionate about understanding life at the molecular level.
                    </p>
                    <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#5F6368' }}>
                        Through workshops, seminars, research symposiums, and collaborative projects across 10 specialized tracks, we foster innovation, academic excellence, and professional development in the biochemical sciences. Join us in exploring the frontiers of biotechnology, drug discovery, bioinformatics, and more!
                    </p>
                </div>
            </section>

            {/* Upcoming Events */}
            <section id="events" style={{ padding: '80px 0', background: '#F8F9FA' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#202124' }}>
                            Upcoming Events
                        </h2>
                        <a href="#" style={{ color: 'var(--color-primary-blue)', fontWeight: 500, textDecoration: 'none' }}>View all events</a>
                    </div>

                    <div className="grid grid-cols-3" style={{ gap: '24px' }}>
                        {publicEvents.map(event => (
                            <div key={event.id} className="card" style={{
                                border: '1px solid #E5E7EB',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                transition: 'box-shadow 0.2s',
                                cursor: 'pointer',
                                background: 'white'
                            }}
                                onClick={() => setSelectedEvent(event)}
                            >
                                <div style={{
                                    height: '160px',
                                    background: 'var(--color-primary-blue)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '48px',
                                    color: 'white',
                                }}>
                                    📅
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '12px', color: '#5F6368' }}>
                                            {new Date(event.startAt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                                        </span>
                                        {event.eventType && (
                                            <span style={{
                                                fontSize: '11px',
                                                background: '#E8F0FE',
                                                color: 'var(--color-primary-blue)',
                                                padding: '2px 8px',
                                                borderRadius: '4px',
                                                fontWeight: 500
                                            }}>
                                                {event.eventType}
                                            </span>
                                        )}
                                    </div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '8px', color: '#202124', lineHeight: 1.4 }}>
                                        {event.title}
                                    </h3>
                                    <p style={{ color: '#5F6368', fontSize: '14px', marginBottom: '16px' }}>
                                        {event.location}
                                    </p>
                                    <span style={{ color: 'var(--color-primary-blue)', fontWeight: 500, fontSize: '14px' }}>
                                        View Details &rarr;
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events */}
            <section id="past-events" style={{ padding: '80px 0', background: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#202124', marginBottom: '40px' }}>
                        Past Events
                    </h2>

                    <div className="grid grid-cols-3" style={{ gap: '24px' }}>
                        {pastEvents.map(event => (
                            <div key={event.id} className="card" style={{
                                border: '1px solid #E5E7EB',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                background: 'white'
                            }}>
                                <div style={{
                                    height: '140px',
                                    background: '#9CA3AF',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '48px',
                                    color: 'white',
                                }}>
                                    ✅
                                </div>
                                <div style={{ padding: '24px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '12px', color: '#5F6368' }}>
                                            {new Date(event.startAt).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                                        </span>
                                        {event.eventType && (
                                            <span style={{
                                                fontSize: '11px',
                                                background: '#F3F4F6',
                                                color: '#6B7280',
                                                padding: '2px 8px',
                                                borderRadius: '4px',
                                                fontWeight: 500
                                            }}>
                                                {event.eventType}
                                            </span>
                                        )}
                                    </div>
                                    <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '8px', color: '#202124' }}>
                                        {event.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Tracks */}
            <section id="tracks" style={{ padding: '80px 0', background: '#F8F9FA' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#202124', marginBottom: '16px', textAlign: 'center' }}>
                        Our Tracks
                    </h2>
                    <p style={{ textAlign: 'center', color: '#5F6368', maxWidth: '600px', margin: '0 auto 60px' }}>
                        Explore our specialized areas of focus and research groups.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '24px' }}>
                        {mockTracks.map(track => (
                            <div key={track.id} style={{
                                background: 'white',
                                padding: '32px',
                                borderRadius: '8px',
                                border: '1px solid #E5E7EB',
                                textAlign: 'center'
                            }}>
                                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{track.icon}</div>
                                <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '12px', color: '#202124' }}>
                                    {track.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: '#5F6368', lineHeight: 1.6 }}>
                                    {track.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Organizers */}
            <section id="organizers" style={{ padding: '80px 0', background: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#202124', marginBottom: '60px', textAlign: 'center' }}>
                        Organizers
                    </h2>

                    {/* Exec Team */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', marginBottom: '60px', flexWrap: 'wrap' }}>
                        {execTeam.map(user => (
                            <div key={user.id} style={{ textAlign: 'center', width: '200px' }}>
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    margin: '0 auto 16px',
                                    backgroundImage: `url(${user.profile?.photoUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundColor: '#E5E7EB'
                                }} />
                                <h3 style={{ fontSize: '18px', fontWeight: '500', marginBottom: '4px', color: '#202124' }}>
                                    {user.fullName}
                                </h3>
                                <p style={{ fontSize: '14px', color: '#5F6368', textTransform: 'capitalize' }}>
                                    {user.role}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Track Leads */}
                    <h3 style={{ fontSize: '24px', fontWeight: '400', color: '#202124', marginBottom: '40px', textAlign: 'center' }}>
                        Track Leads
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '40px' }}>
                        {trackLeads.map(user => (
                            <div
                                key={user.id}
                                style={{
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    transition: 'transform 0.2s'
                                }}
                                onClick={() => setSelectedOrganizer(user)}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    margin: '0 auto 16px',
                                    backgroundImage: `url(${user.profile?.photoUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundColor: '#E5E7EB'
                                }} />
                                <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '4px', color: '#202124' }}>
                                    {user.fullName}
                                </h3>
                                <p style={{ fontSize: '12px', color: '#5F6368', marginBottom: '8px' }}>
                                    {user.profile?.track} Lead
                                </p>
                                <span style={{ fontSize: '12px', color: 'var(--color-primary-blue)', fontWeight: 500 }}>
                                    View profile →
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section id="photos" style={{ padding: '80px 0', background: 'white' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#202124', marginBottom: '40px' }}>
                        Photos
                    </h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '16px',
                        height: '400px'
                    }}>
                        {mockGalleryImages.map((img, i) => (
                            <div key={i} style={{
                                borderRadius: '8px',
                                overflow: 'hidden',
                                height: '100%',
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Chapter Video */}
            <section id="video" style={{ padding: '80px 0', background: '#F8F9FA' }}>
                <div className="container">
                    <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#202124', marginBottom: '40px' }}>
                        Chapter Video
                    </h2>
                    <div style={{
                        maxWidth: '800px',
                        margin: '0 auto',
                        background: '#202124',
                        borderRadius: '8px',
                        aspectRatio: '16/9',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '48px'
                    }}>
                        🎥
                    </div>
                    <p style={{ textAlign: 'center', marginTop: '16px', color: '#5F6368', fontSize: '14px' }}>
                        Coming soon: Watch our chapter introduction video
                    </p>
                </div>
            </section>

            {/* Sponsors */}
            <section style={{ padding: '60px 0', background: 'white', borderTop: '1px solid #E5E7EB' }}>
                <div className="container">
                    <h2 style={{ fontSize: '24px', fontWeight: '400', color: '#202124', marginBottom: '40px', textAlign: 'center' }}>
                        Partners & Sponsors
                    </h2>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Google_Developers_logo.svg/2560px-Google_Developers_logo.svg.png" alt="Google Developers" style={{ height: '40px', opacity: 0.7 }} />
                        <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Jomo_Kenyatta_University_of_Agriculture_and_Technology_Logo.png" alt="JKUAT" style={{ height: '60px', opacity: 0.7 }} />
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#9CA3AF' }}>Science Africa</div>
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section style={{ padding: '80px 0', background: '#F8F9FA' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#202124', marginBottom: '24px', textAlign: 'center' }}>
                        Contact Us
                    </h2>
                    {contactFormStatus === 'success' ? (
                        <div style={{
                            padding: '24px',
                            background: '#D1FAE5',
                            color: '#065F46',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}>
                            Message sent successfully! We'll get back to you soon.
                        </div>
                    ) : (
                        <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                                <input required type="text" placeholder="Name" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #D1D5DB', fontSize: '16px' }} />
                                <input required type="email" placeholder="Email" style={{ padding: '12px', borderRadius: '4px', border: '1px solid #D1D5DB', fontSize: '16px' }} />
                            </div>
                            <textarea required placeholder="Message" rows={5} style={{ padding: '12px', borderRadius: '4px', border: '1px solid #D1D5DB', fontSize: '16px', resize: 'vertical' }}></textarea>
                            <button type="submit" className="btn btn-primary" style={{ padding: '12px', fontSize: '16px' }}>
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer style={{ background: '#202124', color: 'white', padding: '40px 0' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div style={{ marginBottom: '24px', fontSize: '24px', fontWeight: 'bold' }}>JKUBS</div>

                    {/* Social Media Icons */}
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
                        <a href="https://twitter.com/jkubs" target="_blank" rel="noopener noreferrer" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#3C4043',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '18px'
                        }}>𝕏</a>
                        <a href="mailto:info@jkubs.org" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#3C4043',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '18px'
                        }}>✉️</a>
                        <a href="https://linkedin.com/company/jkubs" target="_blank" rel="noopener noreferrer" style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#3C4043',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '18px'
                        }}>💼</a>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '24px', color: '#9AA0A6' }}>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>About</a>
                        <a href="#events" style={{ color: 'inherit', textDecoration: 'none' }}>Events</a>
                        <a href="#organizers" style={{ color: 'inherit', textDecoration: 'none' }}>Organizers</a>
                        <button onClick={() => setShowCoC(true)} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', textDecoration: 'none', padding: 0 }}>Code of Conduct</button>
                        <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a>
                    </div>
                    <div style={{ color: '#9AA0A6', fontSize: '14px' }}>
                        &copy; 2025 JKUAT Biochemistry Society. All rights reserved.
                    </div>
                </div>
            </footer>

            {/* Event Details Modal */}
            {selectedEvent && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    padding: '20px'
                }} onClick={() => setSelectedEvent(null)}>
                    <div style={{
                        background: 'white',
                        borderRadius: '8px',
                        maxWidth: '600px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        position: 'relative'
                    }} onClick={e => e.stopPropagation()}>
                        <div style={{
                            height: '200px',
                            background: 'var(--color-primary-blue)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '64px',
                            color: 'white',
                        }}>
                            📅
                        </div>
                        <div style={{ padding: '32px' }}>
                            <h2 style={{ fontSize: '28px', marginBottom: '16px', color: '#202124' }}>{selectedEvent.title}</h2>
                            <div style={{ display: 'flex', gap: '24px', marginBottom: '24px', color: '#5F6368' }}>
                                <div>
                                    <strong>Date:</strong><br />
                                    {new Date(selectedEvent.startAt).toLocaleDateString('en-US', { dateStyle: 'full' })}
                                </div>
                                <div>
                                    <strong>Location:</strong><br />
                                    {selectedEvent.location}
                                </div>
                            </div>
                            <p style={{ fontSize: '16px', lineHeight: 1.6, color: '#3C4043', marginBottom: '32px' }}>
                                {selectedEvent.description}
                            </p>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
                                <button className="btn btn-ghost" onClick={() => setSelectedEvent(null)}>Close</button>
                                <button className="btn btn-primary">RSVP Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Code of Conduct Modal */}
            {showCoC && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2000,
                    padding: '20px'
                }} onClick={() => setShowCoC(false)}>
                    <div style={{
                        background: 'white',
                        borderRadius: '8px',
                        maxWidth: '600px',
                        width: '100%',
                        maxHeight: '90vh',
                        overflowY: 'auto',
                        position: 'relative',
                        padding: '32px'
                    }} onClick={e => e.stopPropagation()}>
                        <h2 style={{ fontSize: '28px', marginBottom: '24px', color: '#202124' }}>Code of Conduct</h2>
                        <div style={{ color: '#3C4043', lineHeight: 1.6 }}>
                            <p style={{ marginBottom: '16px' }}>
                                JKUBS is dedicated to providing a harassment-free experience for everyone, regardless of gender, gender identity and expression, sexual orientation, disability, physical appearance, body size, race, age, or religion. We do not tolerate harassment of participants in any form.
                            </p>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Our Pledge</h3>
                            <p style={{ marginBottom: '16px' }}>
                                In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone.
                            </p>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Our Standards</h3>
                            <p style={{ marginBottom: '8px' }}>
                                Examples of behavior that contributes to creating a positive environment include:
                            </p>
                            <ul style={{ marginBottom: '16px', paddingLeft: '20px' }}>
                                <li>Using welcoming and inclusive language</li>
                                <li>Being respectful of differing viewpoints and experiences</li>
                                <li>Gracefully accepting constructive criticism</li>
                                <li>Focusing on what is best for the community</li>
                                <li>Showing empathy towards other community members</li>
                            </ul>
                            <p>
                                Sexual language and imagery is not appropriate for any venue, including talks, workshops, parties, Twitter and other online media. Community members violating these rules may be sanctioned or expelled from the community at the discretion of the organizers.
                            </p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '32px' }}>
                            <button className="btn btn-primary" onClick={() => setShowCoC(false)}>Close</button>
                        </div>
                    </div>
                </div>
            )}

            {/* Organizer Profile Modal */}
            {selectedOrganizer && (
                <OrganizerProfile
                    organizer={selectedOrganizer}
                    onClose={() => setSelectedOrganizer(null)}
                />
            )}
        </div>
    );
};

export default LandingPage;
