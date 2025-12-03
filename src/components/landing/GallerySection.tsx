import { motion } from 'framer-motion';
import { useState } from 'react';
import { X } from 'lucide-react';

interface GallerySectionProps {
    images: string[];
}

const GallerySection = ({ images }: GallerySectionProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <section id="photos" style={{ padding: '100px 0', background: 'var(--color-white)' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', marginBottom: '16px' }}>
                        Captured Moments
                    </h2>
                    <p style={{ fontSize: '18px', color: '#6B7280' }}>
                        Highlights from our events, workshops, and community gatherings.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '24px'
                }}>
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            onClick={() => setSelectedImage(img)}
                            style={{
                                borderRadius: '16px',
                                overflow: 'hidden',
                                height: '240px',
                                cursor: 'pointer',
                                boxShadow: 'var(--shadow-md)',
                                position: 'relative'
                            }}
                        >
                            <div style={{
                                width: '100%',
                                height: '100%',
                                backgroundImage: `url(${img})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                transition: 'transform 0.5s ease'
                            }} />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'rgba(0,0,0,0.2)',
                                opacity: 0,
                                transition: 'opacity 0.3s',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
                            >
                                <span style={{
                                    color: 'white',
                                    border: '1px solid white',
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    fontWeight: '600'
                                }}>
                                    View
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.9)',
                        zIndex: 2000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px'
                    }}
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'absolute',
                            top: '24px',
                            right: '24px',
                            background: 'rgba(255,255,255,0.1)',
                            border: 'none',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            cursor: 'pointer',
                            transition: 'background 0.2s'
                        }}
                    >
                        <X size={24} />
                    </button>

                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        src={selectedImage}
                        alt="Gallery preview"
                        style={{
                            maxWidth: '100%',
                            maxHeight: '90vh',
                            borderRadius: '8px',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                        }}
                        onClick={(e) => e.stopPropagation()}
                    />
                </motion.div>
            )}
        </section>
    );
};

export default GallerySection;
