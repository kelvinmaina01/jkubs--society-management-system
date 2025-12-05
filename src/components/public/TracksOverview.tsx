import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BookOpen, Lightbulb, Users } from 'lucide-react';
import { mockTracks } from '../../mockData';
import type { TrackCategory } from '../../types';
import { useNavigate } from 'react-router-dom';

const TracksOverview = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState<TrackCategory | 'All'>('All');

    const categories = [
        { id: 'All', label: 'All Tracks', icon: null },
        { id: 'academic', label: 'Academic & Professional', icon: BookOpen },
        { id: 'innovation', label: 'Innovation & Research', icon: Lightbulb },
        { id: 'community', label: 'Community & Leadership', icon: Users },
    ];

    const filteredTracks = activeCategory === 'All'
        ? mockTracks
        : mockTracks.filter(track => track.category === activeCategory);

    return (
        <div className="section-padding bg-slate-50" id="tracks">
            <div className="container mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="heading-lg mb-4">Explore Our Tracks</h2>
                    <p className="text-slate-600 text-lg">
                        Specialized learning paths designed to give you practical skills and deep knowledge
                        in specific areas of biochemistry and biotechnology.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id as TrackCategory | 'All')}
                            className={`
                                flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300
                                ${activeCategory === category.id
                                    ? 'bg-primary-blue text-white shadow-lg shadow-blue-500/25 scale-105'
                                    : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-primary-blue border border-slate-200'}
                            `}
                        >
                            {category.icon && <category.icon className="w-4 h-4" />}
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Tracks Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredTracks.map((track) => (
                            <motion.div
                                layout
                                key={track.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="card group hover:shadow-xl transition-all duration-300 border-t-4 border-t-transparent hover:border-t-primary-blue"
                            >
                                <div className="p-6 h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className={`
                                            text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider
                                            ${track.category === 'academic' ? 'bg-blue-100 text-blue-700' :
                                                track.category === 'innovation' ? 'bg-purple-100 text-purple-700' :
                                                    'bg-green-100 text-green-700'}
                                        `}>
                                            {track.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-blue transition-colors">
                                        {track.title}
                                    </h3>

                                    <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                                        {track.description}
                                    </p>

                                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-2 text-xs text-slate-500">
                                            <Users className="w-4 h-4" />
                                            <span>{track.enrollmentCount || 0} enrolled</span>
                                        </div>

                                        <button
                                            onClick={() => navigate(`/tracks/${track.id}`)}
                                            className="text-primary-blue font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                                        >
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default TracksOverview;
