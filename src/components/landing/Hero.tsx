import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section style={{
            paddingTop: '140px',
            paddingBottom: '100px',
            background: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(255, 255, 255, 0) 70%)',
                borderRadius: '50%',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                left: '-10%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(37, 99, 235, 0.05) 0%, rgba(255, 255, 255, 0) 70%)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 16px',
                            background: '#EFF6FF',
                            borderRadius: '100px',
                            color: '#2563EB',
                            fontSize: '14px',
                            fontWeight: '600',
                            marginBottom: '32px',
                            border: '1px solid #DBEAFE'
                        }}>
                            <Sparkles size={16} />
                            <span>Empowering Future Scientists</span>
                        </div>

                        <h1 style={{
                            fontSize: 'clamp(48px, 5vw, 72px)',
                            fontWeight: '800',
                            color: '#111827',
                            lineHeight: 1.1,
                            letterSpacing: '-0.03em',
                            marginBottom: '24px'
                        }}>
                            Innovate. Research. <br />
                            <span style={{
                                background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                                Lead the Future.
                            </span>
                        </h1>

                        <p style={{
                            fontSize: '20px',
                            color: '#4B5563',
                            lineHeight: 1.6,
                            marginBottom: '48px',
                            maxWidth: '640px',
                            marginLeft: 'auto',
                            marginRight: 'auto'
                        }}>
                            Join JKUAT's premier community for biochemistry and biotechnology. Connect with peers, access research opportunities, and build your career.
                        </p>

                        <div style={{
                            display: 'flex',
                            gap: '16px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => navigate('/login')}
                                style={{
                                    padding: '16px 32px',
                                    background: '#2563EB',
                                    color: 'white',
                                    borderRadius: '12px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.1)'
                                }}
                            >
                                Join Community
                                <ArrowRight size={20} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.02, background: '#F9FAFB' }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    padding: '16px 32px',
                                    background: 'white',
                                    color: '#374151',
                                    borderRadius: '12px',
                                    fontSize: '16px',
                                    fontWeight: '600',
                                    border: '1px solid #E5E7EB',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px'
                                }}
                            >
                                Partner with Us
                                <ChevronRight size={20} color="#9CA3AF" />
                            </motion.button>
                        </div>

                        <div style={{ marginTop: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                            <div style={{ display: 'flex', marginLeft: '12px' }}>
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} style={{
                                        width: '32px',
                                        height: '32px',
                                        borderRadius: '50%',
                                        background: `#E5E7EB url(https://i.pravatar.cc/100?img=${i + 10})`,
                                        backgroundSize: 'cover',
                                        border: '2px solid white',
                                        marginLeft: '-12px'
                                    }} />
                                ))}
                            </div>
                            <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
                                <strong style={{ color: '#111827' }}>120+</strong> members already joined
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
