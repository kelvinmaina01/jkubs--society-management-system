import { motion } from 'framer-motion';
import { Users, Target, Globe, Award } from 'lucide-react';

const AboutSection = () => {
    const stats = [
        { icon: Users, label: 'Active Members', value: '500+' },
        { icon: Target, label: 'Specialized Tracks', value: '17' },
        { icon: Globe, label: 'Events Hosted', value: '50+' },
        { icon: Award, label: 'Research Papers', value: '20+' },
    ];

    return (
        <div className="section-padding bg-white">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h2 className="heading-lg mb-6 text-gradient">About JKUBS</h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        The Jomo Kenyatta University Biochemistry Society (JKUBS) is a premier student-led organization
                        dedicated to fostering excellence in biochemistry, biotechnology, and related life sciences.
                        We bridge the gap between academic theory and professional practice through mentorship,
                        research, and innovation.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="card hover:border-primary-blue/30 text-center p-8 group"
                        >
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-blue/10 transition-colors">
                                <stat.icon className="w-8 h-8 text-primary-blue" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</h3>
                            <p className="text-slate-600 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="heading-md mb-6">Our Mission</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            To empower students with practical skills, research opportunities, and professional networks
                            that enable them to solve real-world challenges through biochemistry and biotechnology.
                        </p>
                        <ul className="space-y-4">
                            {[
                                'Promoting undergraduate research and innovation',
                                'Facilitating mentorship from industry experts',
                                'Organizing workshops, seminars, and conferences',
                                'Building a community of future scientific leaders'
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-700">
                                    <div className="w-2 h-2 rounded-full bg-primary-blue" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                            {/* Placeholder for an actual image */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center">
                                <Users className="w-20 h-20 text-blue-200" />
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-secondary-orange/10 rounded-full blur-2xl" />
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-blue/10 rounded-full blur-2xl" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
