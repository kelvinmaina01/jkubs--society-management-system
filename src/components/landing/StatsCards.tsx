import { motion } from 'framer-motion';
import { Users, BookOpen, Calendar } from 'lucide-react';

const StatsCards = () => {
    const stats = [
        { label: 'Society Members', value: '250+', icon: Users, color: '#1A73E8' },
        { label: 'Learning Tracks', value: '10', icon: BookOpen, color: '#34A853' },
        { label: 'Events Hosted', value: '50+', icon: Calendar, color: '#FBBC04' },
    ];

    return (
        <section style={{ padding: '40px 0', background: 'white' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '24px'
                }}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                padding: '24px',
                                borderRadius: '12px',
                                background: '#F3F4F6',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                        >
                            <stat.icon size={24} color={stat.color} style={{ marginBottom: '8px' }} />
                            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', margin: 0 }}>
                                {stat.value}
                            </h3>
                            <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsCards;
