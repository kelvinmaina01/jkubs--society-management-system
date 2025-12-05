import { motion } from 'framer-motion';
import type { Track } from '../../types';

interface TracksSectionProps {
    tracks: Track[];
}

const trackColors = [
    '#1E88E5', '#43A047', '#FB8C00', '#E53935', '#8E24AA',
    '#00ACC1', '#FDD835', '#5E35B1', '#C0CA33',
];

const TracksSection = ({ tracks }: TracksSectionProps) => {
    return (
        <section id="tracks" style={{ padding: '80px 0', background: 'var(--color-white)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '400', color: '#111827', marginBottom: '16px' }}>
                        Learning Tracks
                    </h2>
                    <p style={{ fontSize: '16px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
                        Explore our specialized tracks.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '24px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            style={{
                                background: 'white',
                                borderRadius: '8px',
                                border: '1px solid #E5E7EB',
                                borderTop: `4px solid ${trackColors[index % trackColors.length]}`,
                                padding: '24px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{ fontSize: '40px', marginBottom: '16px' }}>
                                {track.icon || '📚'}
                            </div>
                            <h3 style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                color: '#111827',
                                margin: 0
                            }}>
                                {track.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TracksSection;
