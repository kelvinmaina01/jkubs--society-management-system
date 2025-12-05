import { motion } from 'framer-motion';
import type { Partner } from '../../mockData';

interface PartnersSectionProps {
    partners: Partner[];
}

const PartnersSection = ({ partners }: PartnersSectionProps) => {
    return (
        <section style={{ padding: '60px 0', background: '#F9FAFB', borderTop: '1px solid #E5E7EB' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827' }}>
                        Our Partners
                    </h2>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                    gap: '32px',
                    alignItems: 'center',
                    justifyItems: 'center'
                }}>
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{ textAlign: 'center' }}
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                style={{
                                    height: '60px',
                                    objectFit: 'contain',
                                    marginBottom: '12px',
                                    filter: 'grayscale(100%)',
                                    opacity: 0.7,
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(0%)';
                                    e.currentTarget.style.opacity = '1';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = 'grayscale(100%)';
                                    e.currentTarget.style.opacity = '0.7';
                                }}
                            />
                            <p style={{ fontSize: '14px', fontWeight: '500', color: '#4B5563', margin: 0 }}>
                                {partner.name}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
