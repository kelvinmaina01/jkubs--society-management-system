

const JoinTeamCTA = () => {
    return (
        <section style={{ padding: '80px 0', background: 'white', textAlign: 'center' }}>
            <div className="container">
                <h2 style={{
                    fontSize: '36px',
                    fontWeight: '500', // Slightly lighter weight as per screenshot
                    color: '#111827',
                    marginBottom: '16px'
                }}>
                    Want to Join Our Team?
                </h2>
                <p style={{
                    fontSize: '18px',
                    color: '#4B5563',
                    marginBottom: '40px',
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    We're always looking for passionate students to join as track leads, organizers, or volunteers.
                </p>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '16px',
                    marginTop: '32px',
                    flexWrap: 'wrap'
                }}>
                    <a
                        href="/join"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px 32px',
                            background: '#1A73E8',
                            color: 'white',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'background 0.2s',
                            minWidth: '160px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#1557B0'}
                        onMouseLeave={(e) => e.currentTarget.style.background = '#1A73E8'}
                    >
                        Join JKUBS
                    </a>
                    <a
                        href="/tracks"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '12px 32px',
                            background: 'white',
                            color: '#111827',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            fontSize: '16px',
                            fontWeight: '600',
                            textDecoration: 'none',
                            transition: 'background 0.2s',
                            minWidth: '160px'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#F9FAFB'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'white'}
                    >
                        Explore Learning Tracks
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JoinTeamCTA;
