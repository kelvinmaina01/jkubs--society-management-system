import { motion } from 'framer-motion';
import type { User } from '../../types';
import { Linkedin, Mail } from 'lucide-react';

interface OrganizersSectionProps {
    execTeam: User[];
    trackLeads: User[];
    onOrganizerClick: (user: User) => void;
}

const OrganizersSection = ({ execTeam, trackLeads, onOrganizerClick }: OrganizersSectionProps) => {
    return (
        <section id="organizers" style={{ padding: '100px 0', background: '#F9FAFB' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', marginBottom: '16px' }}>
                        Meet the Team
                    </h2>
                    <p style={{ fontSize: '18px', color: '#6B7280' }}>
                        The dedicated students driving JKUBS forward.
                    </p>
                </div>

                {/* Executive Team */}
                <div style={{ marginBottom: '80px' }}>
                    <h3 style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#374151',
                        marginBottom: '40px',
                        textAlign: 'center',
                        position: 'relative',
                        display: 'inline-block',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}>
                        Executive Committee
                        <span style={{
                            position: 'absolute',
                            bottom: '-10px',
                            left: '0',
                            width: '100%',
                            height: '4px',
                            background: 'var(--color-primary-blue)',
                            borderRadius: '2px',
                            opacity: 0.3
                        }}></span>
                    </h3>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                        {execTeam.map((user, index) => (
                            <motion.div
                                key={user.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                style={{ textAlign: 'center', width: '240px' }}
                            >
                                <div style={{
                                    width: '160px',
                                    height: '160px',
                                    borderRadius: '50%',
                                    margin: '0 auto 24px',
                                    backgroundImage: `url(${user.profile?.photoUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundColor: '#E5E7EB',
                                    border: '4px solid white',
                                    boxShadow: 'var(--shadow-lg)'
                                }} />
                                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '4px', color: '#111827' }}>
                                    {user.fullName}
                                </h3>
                                <p style={{
                                    fontSize: '14px',
                                    color: 'var(--color-primary-blue)',
                                    fontWeight: '600',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px',
                                    marginBottom: '16px'
                                }}>
                                    {user.role}
                                </p>
                                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                                    <button className="btn btn-sm btn-ghost" style={{ borderRadius: '50%', padding: '8px' }}>
                                        <Linkedin size={18} />
                                    </button>
                                    <button className="btn btn-sm btn-ghost" style={{ borderRadius: '50%', padding: '8px' }}>
                                        <Mail size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Track Leads */}
                <div>
                    <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#374151', marginBottom: '40px', textAlign: 'center' }}>
                        Track Leads
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '40px' }}>
                        {trackLeads.map((user, index) => (
                            <motion.div
                                key={user.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                style={{
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    padding: '24px',
                                    background: 'white',
                                    borderRadius: '16px',
                                    border: '1px solid #E5E7EB',
                                    transition: 'all 0.3s ease'
                                }}
                                onClick={() => onOrganizerClick(user)}
                                whileHover={{ y: -5, boxShadow: 'var(--shadow-md)' }}
                            >
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    margin: '0 auto 16px',
                                    backgroundImage: `url(${user.profile?.photoUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundColor: '#E5E7EB'
                                }} />
                                <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '4px', color: '#111827' }}>
                                    {user.fullName}
                                </h3>
                                <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>
                                    {user.profile?.track} Lead
                                </p>
                                <span style={{ fontSize: '12px', color: 'var(--color-primary-blue)', fontWeight: '600' }}>
                                    View Profile
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OrganizersSection;
