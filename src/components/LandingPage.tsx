import { mockEvents, mockUsers } from '../mockData';

interface LandingPageProps {
    onLoginClick: () => void;
}

const LandingPage = ({ onLoginClick }: LandingPageProps) => {
    const publicEvents = mockEvents
        .filter(e => e.status === 'published' && new Date(e.startAt) > new Date())
        .slice(0, 3);

    const pastEvents = mockEvents
        .filter(e => new Date(e.startAt) < new Date() && e.status !== 'cancelled')
        .slice(0, 3);

    return (
        <div style={{ minHeight: '100vh', background: 'var(--color-white)' }}>
            {/* Public Header */}
            <header style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--color-light-gray)',
                zIndex: 1000,
            }}>
                <div className="container" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '70px',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'var(--color-primary-blue)',
                            borderRadius: 'var(--radius-md)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            fontWeight: 'bold',
                        }}>
                            JK
                        </div>
                        <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-primary-blue)' }}>
                            JKUBS
                        </span>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
                        <button className="btn btn-ghost">About</button>
                        <button className="btn btn-ghost">Events</button>
                        <button className="btn btn-ghost">Team</button>
                        <button
                            onClick={onLoginClick}
                            className="btn btn-primary"
                        >
                            Member Portal Login
                        </button>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section style={{
                paddingTop: '140px',
                paddingBottom: '80px',
                background: 'linear-gradient(135deg, var(--color-light-gray) 0%, #E0E7FF 100%)',
                textAlign: 'center',
            }}>
                <div className="container">
                    <h1 style={{
                        fontSize: '48px',
                        fontWeight: '800',
                        marginBottom: 'var(--space-4)',
                        background: 'linear-gradient(135deg, var(--color-primary-blue), var(--color-secondary-blue))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        JKUAT Biochemistry Society
                    </h1>
                    <p style={{
                        fontSize: '20px',
                        color: '#4B5563',
                        maxWidth: '700px',
                        margin: '0 auto var(--space-6)',
                        lineHeight: 1.6
                    }}>
                        Uniting students, researchers, and professionals to advance the frontiers of biochemistry and molecular biology.
                    </p>

                    <div style={{ marginBottom: 'var(--space-8)', display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)', background: 'white', padding: 'var(--space-2) var(--space-4)', borderRadius: 'var(--radius-full)', boxShadow: 'var(--shadow-sm)' }}>
                        <span style={{ color: 'var(--color-success)' }}>●</span>
                        <span style={{ fontWeight: 'bold', color: 'var(--color-neutral-dark)' }}>120+ Group Members</span>
                    </div>

                    <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
                        <button className="btn btn-primary btn-lg">
                            Join Society
                        </button>
                        <button className="btn btn-outline btn-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '60px' }}>
                        <div>
                            <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: 'var(--space-4)' }}>
                                About Us
                            </h2>
                            <p style={{ fontSize: '18px', color: '#4B5563', marginBottom: 'var(--space-4)' }}>
                                The JKUAT Biochemistry Society (JKUBS) is a student-led organization dedicated to fostering academic excellence, professional development, and social interaction among biochemistry students.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                                {['🔬 Research Opportunities', '🤝 Networking Events', '📚 Academic Support', '🌍 Community Outreach'].map(item => (
                                    <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: '18px' }}>
                                        <span style={{ color: 'var(--color-success)' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{
                            height: '400px',
                            background: 'var(--color-light-gray)',
                            borderRadius: 'var(--radius-xl)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '64px',
                        }}>
                            🧬
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section style={{ padding: '80px 0', background: 'var(--color-light-gray)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                            Upcoming Events
                        </h2>
                        <p style={{ color: '#6B7280' }}>Join us at our next gathering</p>
                    </div>

                    <div className="grid grid-cols-3" style={{ marginBottom: 'var(--space-8)' }}>
                        {publicEvents.map(event => (
                            <div key={event.id} className="card" style={{ border: 'none' }}>
                                <div style={{
                                    height: '160px',
                                    background: 'var(--color-primary-blue)',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--space-4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '48px',
                                    color: 'white',
                                    opacity: 0.9,
                                }}>
                                    📅
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                                    {event.title}
                                </h3>
                                <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: 'var(--space-4)' }}>
                                    {new Date(event.startAt).toLocaleDateString('en-US', { dateStyle: 'long' })} • {event.location}
                                </p>
                                <button className="btn btn-outline btn-sm" style={{ width: '100%' }}>
                                    View Details
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events */}
            <section style={{ padding: '80px 0' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                            Past Events
                        </h2>
                        <p style={{ color: '#6B7280' }}>See what we've been up to</p>
                    </div>

                    <div className="grid grid-cols-3">
                        {pastEvents.length > 0 ? pastEvents.map(event => (
                            <div key={event.id} className="card" style={{ border: 'none', opacity: 0.8 }}>
                                <div style={{
                                    height: '160px',
                                    background: '#9CA3AF',
                                    borderRadius: 'var(--radius-md)',
                                    marginBottom: 'var(--space-4)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '48px',
                                    color: 'white',
                                }}>
                                    ✅
                                </div>
                                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                                    {event.title}
                                </h3>
                                <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: 'var(--space-4)' }}>
                                    {new Date(event.startAt).toLocaleDateString('en-US', { dateStyle: 'long' })}
                                </p>
                            </div>
                        )) : (
                            <div style={{ gridColumn: 'span 3', textAlign: 'center', color: '#9CA3AF' }}>
                                No past events to show yet.
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section style={{ padding: '80px 0', background: '#F9FAFB' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                            Meet Our Leadership
                        </h2>
                        <p style={{ color: '#6B7280' }}>The team driving JKUBS forward</p>
                    </div>

                    <div className="grid grid-cols-3" style={{ gap: 'var(--space-8)' }}>
                        {mockUsers
                            .filter(u => ['chairman', 'secretary', 'treasurer', 'research_lead', 'mentorship_lead', 'outreach_lead'].includes(u.role))
                            .sort((a, b) => {
                                const order = {
                                    chairman: 1,
                                    secretary: 2,
                                    treasurer: 3,
                                    research_lead: 4,
                                    mentorship_lead: 5,
                                    outreach_lead: 6
                                };
                                return (order[a.role as keyof typeof order] || 99) - (order[b.role as keyof typeof order] || 99);
                            })
                            .map(leader => (
                                <div key={leader.id} className="card" style={{ textAlign: 'center', padding: 'var(--space-8)' }}>
                                    <div style={{
                                        width: '120px',
                                        height: '120px',
                                        borderRadius: '50%',
                                        margin: '0 auto var(--space-4)',
                                        background: 'var(--color-light-gray)',
                                        backgroundImage: `url(${leader.profile?.photoUrl})`,
                                        backgroundSize: 'cover',
                                        border: '4px solid var(--color-light-gray)'
                                    }} />
                                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: 'var(--space-1)' }}>
                                        {leader.fullName}
                                    </h3>
                                    <p style={{
                                        color: 'var(--color-primary-blue)',
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        fontSize: '12px',
                                        marginBottom: 'var(--space-3)'
                                    }}>
                                        {leader.role.replace('_', ' ')}
                                    </p>
                                    <p style={{ color: '#6B7280', fontSize: '14px' }}>
                                        {leader.profile?.bio}
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section style={{ padding: '80px 0', background: 'var(--color-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: 'var(--space-4)' }}>
                            Contact Us
                        </h2>
                        <p style={{ color: '#6B7280', marginBottom: 'var(--space-8)' }}>
                            Have questions or want to partner with us? Send us a message.
                        </p>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                                <input type="text" placeholder="Name" className="input" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #E5E7EB' }} />
                                <input type="email" placeholder="Email" className="input" style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #E5E7EB' }} />
                            </div>
                            <textarea placeholder="Message" rows={4} style={{ width: '100%', padding: '12px', borderRadius: 'var(--radius-md)', border: '1px solid #E5E7EB', resize: 'vertical' }}></textarea>
                            <button className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer style={{ background: 'var(--color-neutral-dark)', color: 'white', padding: '60px 0' }}>
                <div className="container">
                    <div className="grid grid-cols-4" style={{ gap: '40px' }}>
                        <div style={{ gridColumn: 'span 2' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: 'var(--space-4)' }}>JKUBS</h3>
                            <p style={{ color: '#9CA3AF', maxWidth: '300px' }}>
                                Empowering the next generation of biochemists through innovation, research, and community.
                            </p>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: 'var(--space-4)' }}>Quick Links</h4>
                            <ul style={{ listStyle: 'none', padding: 0, color: '#9CA3AF', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                                <li><a href="#" style={{ color: 'inherit' }}>Home</a></li>
                                <li><a href="#" style={{ color: 'inherit' }}>About</a></li>
                                <li><a href="#" style={{ color: 'inherit' }}>Events</a></li>
                                <li><a href="#" style={{ color: 'inherit' }}>Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ fontWeight: 'bold', marginBottom: 'var(--space-4)' }}>Contact</h4>
                            <p style={{ color: '#9CA3AF' }}>info@jkubs.org</p>
                            <p style={{ color: '#9CA3AF' }}>JKUAT Main Campus</p>
                            <p style={{ color: '#9CA3AF' }}>Juja, Kenya</p>
                        </div>
                    </div>
                    <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '40px', paddingTop: '20px', textAlign: 'center', color: '#6B7280', fontSize: '14px' }}>
                        © 2025 JKUAT Biochemistry Society. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
