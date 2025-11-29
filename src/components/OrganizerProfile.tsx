import type { User } from '../types';

interface OrganizerProfileProps {
    organizer: User;
    onClose: () => void;
}

const OrganizerProfile = ({ organizer, onClose }: OrganizerProfileProps) => {
    const profile = organizer.profile;

    return (
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
        }} onClick={onClose}>
            <div style={{
                background: 'white',
                borderRadius: '8px',
                maxWidth: '500px',
                width: '100%',
                maxHeight: '90vh',
                overflowY: 'auto',
                position: 'relative'
            }} onClick={e => e.stopPropagation()}>
                {/* Profile Header */}
                <div style={{
                    background: 'linear-gradient(135deg, var(--color-primary-blue) 0%, #2E86FF 100%)',
                    padding: '40px 32px',
                    color: 'white',
                    textAlign: 'center'
                }}>
                    <div style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        margin: '0 auto 16px',
                        backgroundImage: `url(${profile?.photoUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '4px solid white',
                        backgroundColor: '#E5E7EB'
                    }} />
                    <h2 style={{ fontSize: '28px', marginBottom: '8px', fontWeight: '500' }}>
                        {organizer.fullName}
                    </h2>
                    {profile?.track && (
                        <div style={{
                            fontSize: '16px',
                            opacity: 0.9,
                            marginBottom: '8px'
                        }}>
                            {profile.track} Lead
                        </div>
                    )}
                    {!profile?.track && (
                        <div style={{
                            fontSize: '16px',
                            opacity: 0.9,
                            textTransform: 'capitalize',
                            marginBottom: '8px'
                        }}>
                            {organizer.role}
                        </div>
                    )}
                    {profile?.location && (
                        <div style={{
                            fontSize: '14px',
                            opacity: 0.8,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px'
                        }}>
                            <span>📍</span> {profile.location}
                        </div>
                    )}
                </div>

                {/* Profile Content */}
                <div style={{ padding: '32px' }}>
                    {/* Bio */}
                    {profile?.bio && (
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '500',
                                marginBottom: '12px',
                                color: '#202124'
                            }}>
                                About
                            </h3>
                            <p style={{
                                fontSize: '15px',
                                lineHeight: 1.6,
                                color: '#5F6368'
                            }}>
                                {profile.bio}
                            </p>
                        </div>
                    )}

                    {/* Academic Info */}
                    <div style={{ marginBottom: '24px' }}>
                        <h3 style={{
                            fontSize: '18px',
                            fontWeight: '500',
                            marginBottom: '12px',
                            color: '#202124'
                        }}>
                            Academic Information
                        </h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#5F6368' }}>Department:</span>
                                <span style={{ color: '#202124', fontWeight: '500' }}>{organizer.department}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ color: '#5F6368' }}>Year:</span>
                                <span style={{ color: '#202124', fontWeight: '500' }}>Year {organizer.yearOfStudy}</span>
                            </div>
                            {organizer.studentId && (
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#5F6368' }}>Student ID:</span>
                                    <span style={{ color: '#202124', fontWeight: '500' }}>{organizer.studentId}</span>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Social Media Links */}
                    {(profile?.twitter || profile?.linkedin || profile?.github) && (
                        <div style={{ marginBottom: '24px' }}>
                            <h3 style={{
                                fontSize: '18px',
                                fontWeight: '500',
                                marginBottom: '12px',
                                color: '#202124'
                            }}>
                                Connect
                            </h3>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                {profile.twitter && (
                                    <a
                                        href={`https://twitter.com/${profile.twitter}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '8px 16px',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '6px',
                                            textDecoration: 'none',
                                            color: '#202124',
                                            fontSize: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            transition: 'background 0.2s'
                                        }}
                                    >
                                        <span>𝕏</span> Twitter
                                    </a>
                                )}
                                {profile.linkedin && (
                                    <a
                                        href={`https://linkedin.com/in/${profile.linkedin}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '8px 16px',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '6px',
                                            textDecoration: 'none',
                                            color: '#202124',
                                            fontSize: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            transition: 'background 0.2s'
                                        }}
                                    >
                                        <span>💼</span> LinkedIn
                                    </a>
                                )}
                                {profile.github && (
                                    <a
                                        href={`https://github.com/${profile.github}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: '8px 16px',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '6px',
                                            textDecoration: 'none',
                                            color: '#202124',
                                            fontSize: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            transition: 'background 0.2s'
                                        }}
                                    >
                                        <span>🐙</span> GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Close Button */}
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <button
                            className="btn btn-ghost"
                            onClick={onClose}
                            style={{ padding: '10px 24px' }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizerProfile;
