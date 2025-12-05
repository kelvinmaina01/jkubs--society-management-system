import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import type { Story } from '../../types';

interface StoriesSectionProps {
    stories: Story[];
}

const StoriesSection = ({ stories }: StoriesSectionProps) => {
    return (
        <section id="stories" style={{ padding: '80px 0', background: '#F9FAFB' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: '400',
                        color: '#111827',
                        marginBottom: '16px'
                    }}>
                        Member Stories
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        color: '#6B7280',
                        maxWidth: '600px',
                        margin: '0 auto'
                    }}>
                        Hear from our members about their journey and achievements.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {stories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                background: 'white',
                                padding: '32px',
                                borderRadius: '8px',
                                border: '1px solid #E5E7EB',
                                boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                            }}
                        >
                            <Quote size={32} color="#E5E7EB" style={{ marginBottom: '16px' }} />

                            <p style={{
                                fontSize: '16px',
                                color: '#4B5563',
                                lineHeight: 1.6,
                                fontStyle: 'italic',
                                marginBottom: '24px'
                            }}>
                                "{story.story.substring(0, 150)}..."
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <img
                                    src={story.photoUrl}
                                    alt={story.studentName}
                                    style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div>
                                    <h4 style={{
                                        fontSize: '16px',
                                        fontWeight: '600',
                                        color: '#111827',
                                        margin: 0
                                    }}>
                                        {story.studentName}
                                    </h4>
                                    <span style={{
                                        fontSize: '14px',
                                        color: '#6B7280'
                                    }}>
                                        {story.achievement}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StoriesSection;
