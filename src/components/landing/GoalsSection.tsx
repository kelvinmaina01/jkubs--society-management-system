import { motion } from 'framer-motion';

const GoalsSection = () => {
    const goals = [
        {
            icon: '🎓',
            title: 'Excellence in Education',
            description: 'Provide world-class biochemistry education through hands-on learning, expert mentorship, and cutting-edge research opportunities.',
            color: '#1A73E8',
            lightBg: '#EBF5FF'
        },
        {
            icon: '🔬',
            title: 'Research & Innovation',
            description: 'Foster groundbreaking research in molecular biology, biotechnology, and precision medicine that addresses local and global challenges.',
            color: '#16A34A',
            lightBg: '#ECFDF5'
        },
        {
            icon: '🤝',
            title: 'Community Impact',
            description: 'Connect students with industry leaders, research institutions, and create pathways for career success and societal contribution.',
            color: '#EA580C',
            lightBg: '#FFF7ED'
        }
    ];

    return (
        <section style={{
            padding: '80px 0',
            background: 'white'
        }}>
            <div className="container">


                {/* Section Header */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px' }}>
                    <h2 style={{
                        fontSize: '42px',
                        fontWeight: '700',
                        color: '#111827',
                        marginBottom: '16px'
                    }}>
                        Our Goals
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#6B7280',
                        lineHeight: 1.6
                    }}>
                        Building the future of biochemistry research and innovation in Kenya
                    </p>
                </div>

                {/* Goals Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '32px',
                    maxWidth: '1100px',
                    margin: '0 auto'
                }}>
                    {goals.map((goal, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                            style={{
                                background: goal.lightBg,
                                border: `2px solid ${goal.color}20`,
                                borderRadius: '16px',
                                padding: '36px',
                                textAlign: 'center',
                                transition: 'all 0.3s ease',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = goal.color;
                                e.currentTarget.style.boxShadow = `0 15px 40px ${goal.color}20`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = `${goal.color}20`;
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {/* Icon */}
                            <div style={{
                                fontSize: '56px',
                                marginBottom: '20px'
                            }}>
                                {goal.icon}
                            </div>

                            {/* Title */}
                            <h3 style={{
                                fontSize: '22px',
                                fontWeight: '700',
                                color: goal.color,
                                marginBottom: '16px'
                            }}>
                                {goal.title}
                            </h3>

                            {/* Description */}
                            <p style={{
                                fontSize: '15px',
                                color: '#4B5563',
                                lineHeight: 1.7
                            }}>
                                {goal.description}
                            </p>

                            {/* Decorative Circle */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-40px',
                                right: '-40px',
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                background: `${goal.color}10`,
                                opacity: 0.5
                            }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GoalsSection;
