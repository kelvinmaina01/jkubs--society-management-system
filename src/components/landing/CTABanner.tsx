import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
    background?: string;
}

const CTABanner = ({
    title = "Ready to Start Your Journey?",
    description = "Join JKUBS today and become part of a thriving community of biochemists.",
    buttonText = "Join Now",
    buttonLink = "/register",
    background = "linear-gradient(135deg, #1A73E8 0%, #0B5FFF 100%)"
}: CTABannerProps) => {
    return (
        <section style={{ padding: '40px 0' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    style={{
                        background: background,
                        borderRadius: '16px',
                        padding: '32px',
                        textAlign: 'center',
                        color: 'white',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                >
                    <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px' }}>
                        {title}
                    </h2>
                    <p style={{ fontSize: '16px', opacity: 0.9, marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px' }}>
                        {description}
                    </p>
                    <a
                        href={buttonLink}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 24px',
                            background: 'white',
                            color: '#1A73E8',
                            borderRadius: '8px',
                            fontWeight: '600',
                            fontSize: '14px',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        {buttonText} <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default CTABanner;
