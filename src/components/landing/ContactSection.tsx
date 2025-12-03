import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" style={{ padding: '100px 0', background: '#F9FAFB' }}>
            <div className="container" style={{ maxWidth: '600px' }}>
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', marginBottom: '16px' }}>
                        Get in Touch
                    </h2>
                    <p style={{ fontSize: '18px', color: '#6B7280' }}>
                        Have questions? Want to collaborate? We'd love to hear from you.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card glass-strong"
                    style={{ padding: '40px' }}
                >
                    {status === 'success' ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            style={{
                                textAlign: 'center',
                                padding: '40px 0',
                                color: 'var(--color-success)'
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                                style={{
                                    width: '80px',
                                    height: '80px',
                                    background: '#D1FAE5',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 24px'
                                }}
                            >
                                <CheckCircle size={40} color="#059669" />
                            </motion.div>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '8px', color: '#065F46' }}>
                                Message Sent!
                            </h3>
                            <p style={{ color: '#047857' }}>
                                We'll get back to you as soon as possible.
                            </p>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                                <div className="form-group">
                                    <label className="form-label">Name</label>
                                    <input required type="text" className="form-input" placeholder="John Doe" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email</label>
                                    <input required type="email" className="form-input" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <select className="form-input">
                                    <option>General Inquiry</option>
                                    <option>Membership</option>
                                    <option>Collaboration</option>
                                    <option>Event Proposal</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea required rows={5} className="form-input" placeholder="How can we help you?" style={{ resize: 'vertical' }}></textarea>
                            </div>

                            <motion.button
                                type="submit"
                                className="btn btn-primary btn-lg bg-gradient-primary"
                                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? (
                                    <span className="animate-spin">⏳</span>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
