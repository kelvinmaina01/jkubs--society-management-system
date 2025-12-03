import { motion } from 'framer-motion';
import { Target, Users, BookOpen } from 'lucide-react';

const AboutSection = () => {
    const features = [
        {
            icon: <Users size={24} />,
            title: 'Community',
            description: 'Join a vibrant community of students, researchers, and professionals.'
        },
        {
            icon: <BookOpen size={24} />,
            title: 'Education',
            description: 'Access workshops, seminars, and resources to boost your academic journey.'
        },
        {
            icon: <Target size={24} />,
            title: 'Innovation',
            description: 'Participate in cutting-edge research projects and hackathons.'
        }
    ];

    return (
        <section id="about" style={{ padding: '100px 0', background: 'var(--color-white)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{
                            fontSize: '36px',
                            fontWeight: '800',
                            marginBottom: '24px',
                            color: 'var(--color-dark-bg)',
                            lineHeight: 1.2
                        }}>
                            Advancing the Frontiers of <br />
                            <span className="text-gradient">Biochemistry</span>
                        </h2>
                        <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#4B5563', marginBottom: '24px' }}>
                            The JKUAT Biochemistry Society (JKUBS) is a student-led organization dedicated to advancing the study and application of biochemistry and molecular biology. We bring together students, researchers, and professionals passionate about understanding life at the molecular level.
                        </p>
                        <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#4B5563' }}>
                            Through workshops, seminars, research symposiums, and collaborative projects across 10 specialized tracks, we foster innovation, academic excellence, and professional development in the biochemical sciences.
                        </p>
                    </motion.div>

                    <div style={{ display: 'grid', gap: '24px' }}>
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2, duration: 0.5 }}
                                className="card glass"
                                style={{
                                    padding: '24px',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '20px',
                                    border: '1px solid var(--glass-border)'
                                }}
                            >
                                <div style={{
                                    padding: '12px',
                                    background: 'rgba(59, 130, 246, 0.1)',
                                    borderRadius: '12px',
                                    color: 'var(--color-primary-blue)'
                                }}>
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: '#1F2937' }}>
                                        {feature.title}
                                    </h3>
                                    <p style={{ color: '#6B7280', lineHeight: 1.5 }}>
                                        {feature.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
