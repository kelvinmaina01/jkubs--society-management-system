import { useState } from 'react';

const NewsletterCTA = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic here
        console.log('Subscribing:', email);
        setEmail('');
        alert('Thanks for subscribing!');
    };

    return (
        <section style={{ padding: '60px 0' }}>
            <div className="container">
                <div style={{
                    background: '#1A73E8', // Google Blue
                    borderRadius: '20px',
                    padding: '60px 24px',
                    textAlign: 'center',
                    color: 'white',
                    boxShadow: '0 4px 20px rgba(26, 115, 232, 0.2)'
                }}>
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: '600',
                        marginBottom: '16px'
                    }}>
                        Never Miss an Event
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        maxWidth: '600px',
                        margin: '0 auto 32px',
                        opacity: 0.9,
                        lineHeight: 1.6
                    }}>
                        Subscribe  to get notified about upcoming workshops and exclusive JKUBS events.
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            gap: '12px',
                            justifyContent: 'center',
                            maxWidth: '500px',
                            margin: '0 auto',
                            flexWrap: 'wrap'
                        }}
                    >
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{
                                flex: 1,
                                padding: '12px 20px',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.3)',
                                background: 'rgba(255,255,255,0.1)',
                                color: 'white',
                                fontSize: '16px',
                                outline: 'none',
                                minWidth: '250px'
                            }}
                        />
                        <button
                            type="submit"
                            style={{
                                padding: '12px 32px',
                                background: 'white',
                                color: '#1A73E8',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default NewsletterCTA;
