import { Mail, Linkedin, Twitter } from 'lucide-react';
import type { User } from '../../types';

interface ExecutiveTeamProps {
    executives: User[];
}

const ExecutiveTeam = ({ executives }: ExecutiveTeamProps) => {
    return (
        <section id="organizers" style={{
            padding: '80px 0',
            background: '#F9FAFB'
        }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: '400',
                        color: '#111827',
                        marginBottom: '12px'
                    }}>
                        Executive Committee
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        color: '#6B7280',
                        lineHeight: 1.6
                    }}>
                        Meet the team behind JKUBS - dedicated students and faculty working to advance biochemistry education at JKUAT.
                    </p>
                </div>

                {/* Executive Cards Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: '32px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {executives.map((exec) => (
                        <div
                            key={exec.id}
                            style={{
                                background: 'white',
                                borderRadius: '12px',
                                padding: '32px 24px',
                                textAlign: 'center',
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
                            {/* Avatar */}
                            <img
                                src={exec.profile?.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(exec.fullName)}&background=1A73E8&color=fff&size=128`}
                                alt={exec.fullName}
                                style={{
                                    width: '96px',
                                    height: '96px',
                                    borderRadius: '50%',
                                    marginBottom: '16px',
                                    border: '3px solid #E5E7EB'
                                }}
                            />

                            {/* Name */}
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '600',
                                color: '#111827',
                                marginBottom: '4px'
                            }}>
                                {exec.fullName}
                            </h3>

                            {/* Position */}
                            <div style={{
                                fontSize: '14px',
                                fontWeight: '500',
                                color: '#1A73E8',
                                marginBottom: '12px'
                            }}>
                                {exec.position}
                            </div>

                            {/* Bio */}
                            <p style={{
                                fontSize: '14px',
                                color: '#6B7280',
                                lineHeight: 1.5,
                                marginBottom: '20px',
                                minHeight: '60px'
                            }}>
                                {exec.profile?.bio || 'Leading JKUBS to excellence.'}
                            </p>

                            {/* Social Links */}
                            <div style={{
                                display: 'flex',
                                gap: '8px',
                                justifyContent: 'center',
                                paddingTop: '16px',
                                borderTop: '1px solid #E5E7EB'
                            }}>
                                {/* Email */}
                                <a
                                    href={`mailto:${exec.email}`}
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        background: '#F3F4F6',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#6B7280',
                                        transition: 'all 0.2s',
                                        textDecoration: 'none'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = '#EA4335';
                                        e.currentTarget.style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#F3F4F6';
                                        e.currentTarget.style.color = '#6B7280';
                                    }}
                                    title="Email"
                                >
                                    <Mail size={16} />
                                </a>

                                {/* LinkedIn */}
                                {exec.profile?.linkedin && (
                                    <a
                                        href={`https://linkedin.com/in/${exec.profile.linkedin}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            background: '#F3F4F6',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#6B7280',
                                            transition: 'all 0.2s',
                                            textDecoration: 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#0A66C2';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = '#F3F4F6';
                                            e.currentTarget.style.color = '#6B7280';
                                        }}
                                        title="LinkedIn"
                                    >
                                        <Linkedin size={16} />
                                    </a>
                                )}

                                {/* Twitter */}
                                {exec.profile?.twitter && (
                                    <a
                                        href={`https://twitter.com/${exec.profile.twitter}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            width: '36px',
                                            height: '36px',
                                            borderRadius: '50%',
                                            background: '#F3F4F6',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#6B7280',
                                            transition: 'all 0.2s',
                                            textDecoration: 'none'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#1DA1F2';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = '#F3F4F6';
                                            e.currentTarget.style.color = '#6B7280';
                                        }}
                                        title="Twitter"
                                    >
                                        <Twitter size={16} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExecutiveTeam;
