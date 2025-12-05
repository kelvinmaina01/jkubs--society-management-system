import { X } from 'lucide-react';
import type { User } from '../../types';

interface TeamSectionProps {
    executives: User[];
    trackLeads: User[];
}

const TeamMemberCard = ({ member }: { member: User }) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            padding: '24px',
            background: 'transparent' // Clean look like screenshot
        }}>
            {/* Avatar */}
            <div style={{
                position: 'relative',
                marginBottom: '16px'
            }}>
                <img
                    src={member.profile?.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.fullName)}&size=150&background=random`}
                    alt={member.fullName}
                    style={{
                        width: '140px',
                        height: '140px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        border: '4px solid white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                />
                {/* Social Icon Overlay (Optional, like X logo in screenshot) */}
                {member.profile?.twitter && (
                    <a
                        href={`https://twitter.com/${member.profile.twitter}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            position: 'absolute',
                            bottom: '0',
                            right: '10px',
                            background: 'white',
                            borderRadius: '50%',
                            padding: '6px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#1DA1F2',
                            width: '32px',
                            height: '32px'
                        }}
                    >
                        <X size={16} />
                    </a>
                )}
            </div>

            {/* Name */}
            <h3 style={{
                fontSize: '18px',
                fontWeight: '600',
                color: '#1F2937',
                marginBottom: '4px'
            }}>
                {member.fullName}
            </h3>

            {/* Role */}
            <p style={{
                fontSize: '14px',
                color: '#6B7280',
                marginBottom: '16px',
                minHeight: '40px' // Ensure alignment
            }}>
                {member.position || (member.role === 'track_lead' ? `${member.profile?.track || 'Track'} Lead` : 'Organizer')}
            </p>

            {/* See Bio Button */}
            <button
                style={{
                    padding: '8px 24px',
                    background: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '4px',
                    color: '#1A73E8',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#F9FAFB';
                    e.currentTarget.style.borderColor = '#D1D5DB';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.borderColor = '#E5E7EB';
                }}
                onClick={() => alert(`Bio for ${member.fullName}: ${member.profile?.bio || 'No bio available.'}`)}
            >
                See bio
            </button>
        </div>
    );
};

const TeamSection = ({ executives, trackLeads }: TeamSectionProps) => {
    // Combine and sort/filter if needed. For now, show Execs then Track Leads.
    // Or maybe separate sections? The screenshot implies a mixed or categorized grid.
    // Let's do two sections: Organizers (Execs) and Track Leads.

    return (
        <section id="team" style={{ padding: '80px 0', background: 'white' }}>
            <div className="container">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{
                        fontSize: '36px',
                        fontWeight: '400',
                        color: '#111827',
                        marginBottom: '16px'
                    }}>
                        Organizers
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#6B7280',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        Meet the team behind JKUBS - dedicated students and faculty working to advance biochemistry education at JKUAT.
                    </p>
                </div>

                {/* Executives Grid */}
                <div style={{ marginBottom: '60px' }}>
                    <h3 style={{
                        fontSize: '24px',
                        fontWeight: '500',
                        color: '#374151',
                        marginBottom: '32px',
                        textAlign: 'center',
                        borderBottom: '1px solid #E5E7EB',
                        paddingBottom: '16px',
                        display: 'inline-block',
                        position: 'relative',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}>
                        Executive Committee
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '32px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {executives.map(exec => (
                            <TeamMemberCard key={exec.id} member={exec} />
                        ))}
                    </div>
                </div>

                {/* Track Leads Grid */}
                <div>
                    <h3 style={{
                        fontSize: '24px',
                        fontWeight: '500',
                        color: '#374151',
                        marginBottom: '32px',
                        textAlign: 'center',
                        borderBottom: '1px solid #E5E7EB',
                        paddingBottom: '16px',
                        display: 'inline-block',
                        position: 'relative',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}>
                        Track Leads
                    </h3>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '32px',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}>
                        {trackLeads.map(lead => (
                            <TeamMemberCard key={lead.id} member={lead} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
