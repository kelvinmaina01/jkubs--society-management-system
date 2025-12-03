import { motion } from 'framer-motion';
import type { Track } from '../../types';

interface TracksSectionProps {
    tracks: Track[];
}

const TracksSection = ({ tracks }: TracksSectionProps) => {
    return (
        <section id="tracks" style={{ padding: '100px 0', background: 'var(--color-white)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
                    <span style={{
                        color: 'var(--color-primary-blue)',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontSize: '14px'
                    }}>
                        Research Areas
                    </span>
                    <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', marginTop: '8px', marginBottom: '16px' }}>
                        Specialized Tracks
                    </h2>
                    <p style={{ fontSize: '18px', color: '#6B7280', lineHeight: 1.6 }}>
                        Explore our diverse research groups and find your passion in the biochemical sciences.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '24px'
                }}>
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ y: -5, borderColor: 'var(--color-primary-blue)' }}
                            className="card"
                            style={{
                                padding: '32px',
                                textAlign: 'center',
                                border: '1px solid #E5E7EB',
                                transition: 'all 0.3s ease',
                                background: 'white'
                            }}
                        >
                            <div style={{
                                fontSize: '48px',
                                marginBottom: '20px',
                                filter: 'grayscale(0.2)',
                                transition: 'filter 0.3s'
                            }}>
                                {track.icon}
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px', color: '#111827' }}>
                                {track.title}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: 1.6 }}>
                                {track.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TracksSection;
