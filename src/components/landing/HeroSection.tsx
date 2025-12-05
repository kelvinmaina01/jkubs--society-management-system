import { Users } from 'lucide-react';
import { Mail, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const HeroSection = () => {
    return (
        <section style={{
            padding: '100px 0 60px',
            background: 'white',
            textAlign: 'center'
        }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                {/* Main Title */}
                <h1 style={{
                    fontSize: '48px',
                    fontWeight: '400',
                    color: '#111827',
                    marginBottom: '16px',
                    lineHeight: 1.2
                }}>
                    JKUBS - Jomo Kenyatta University<br />Biochemistry Society
                </h1>

                {/* Member Count */}
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    color: '#6B7280',
                    fontSize: '16px',
                    marginBottom: '20px'
                }}>
                    <Users size={20} />
                    <span>250 Society Members</span>
                </div>

                {/* Social Links */}
                <div style={{
                    display: 'flex',
                    gap: '12px',
                    justifyContent: 'center'
                }}>
                    <a
                        href="https://twitter.com/jkubs"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#F3F4F6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#6B7280',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#1DA1F2';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#F3F4F6';
                            e.currentTarget.style.color = '#6B7280';
                        }}
                    >
                        <Twitter size={18} />
                    </a>

                    <a
                        href="https://linkedin.com/company/jkubs"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#F3F4F6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#6B7280',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#0A66C2';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#F3F4F6';
                            e.currentTarget.style.color = '#6B7280';
                        }}
                    >
                        <Linkedin size={18} />
                    </a>

                    <a
                        href="https://chat.whatsapp.com/jkubs"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#F3F4F6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#6B7280',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#25D366';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#F3F4F6';
                            e.currentTarget.style.color = '#6B7280';
                        }}
                    >
                        <MessageCircle size={18} />
                    </a>

                    <a
                        href="mailto:info@jkubs.org"
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: '#F3F4F6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#6B7280',
                            transition: 'all 0.2s'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#EA4335';
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#F3F4F6';
                            e.currentTarget.style.color = '#6B7280';
                        }}
                    >
                        <Mail size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
