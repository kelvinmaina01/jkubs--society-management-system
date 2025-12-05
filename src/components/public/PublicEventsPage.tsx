import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Share2, ArrowRight } from 'lucide-react';
import { mockEvents } from '../../mockData';
import { format } from 'date-fns';

const PublicEventsPage = () => {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

    // Filter events based on date
    const now = new Date();
    const upcomingEvents = mockEvents.filter(event => new Date(event.startAt) >= now).sort((a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime());
    const pastEvents = mockEvents.filter(event => new Date(event.startAt) < now).sort((a, b) => new Date(b.startAt).getTime() - new Date(a.startAt).getTime());

    const displayedEvents = activeTab === 'upcoming' ? upcomingEvents : pastEvents;

    return (
        <div className="min-h-screen bg-white pt-20 pb-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-slate-200 pb-4">
                    <div>
                        <h1 className="heading-lg mb-2">Events</h1>
                        <p className="text-slate-600">Join our workshops, seminars, and community gatherings.</p>
                    </div>

                    <div className="flex gap-6 mt-6 md:mt-0">
                        <button
                            onClick={() => setActiveTab('upcoming')}
                            className={`text-lg font-medium pb-4 border-b-2 transition-colors ${activeTab === 'upcoming' ? 'border-primary-blue text-primary-blue' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                        >
                            Upcoming events
                        </button>
                        <button
                            onClick={() => setActiveTab('past')}
                            className={`text-lg font-medium pb-4 border-b-2 transition-colors ${activeTab === 'past' ? 'border-primary-blue text-primary-blue' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
                        >
                            Past events
                        </button>
                    </div>
                </div>

                <div className="space-y-6">
                    {displayedEvents.length === 0 ? (
                        <div className="text-center py-20 bg-slate-50 rounded-2xl">
                            <Calendar className="w-16 h-16 text-slate-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-slate-700">No {activeTab} events found</h3>
                            <p className="text-slate-500">Check back later for updates.</p>
                        </div>
                    ) : (
                        displayedEvents.map((event) => (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                key={event.id}
                                className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow bg-white group"
                            >
                                {/* Event Logo/Icon - Circular as per GDG style */}
                                <div className="flex-shrink-0">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-slate-900 flex items-center justify-center overflow-hidden relative">
                                        {/* Abstract geometric shapes for logo */}
                                        <div className="absolute inset-0 bg-slate-900">
                                            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#4285F4] rounded-bl-full opacity-90"></div>
                                            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[#EA4335] rounded-tr-full opacity-90"></div>
                                            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-[#FBBC04] rounded-br-full opacity-80"></div>
                                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-[#34A853] rounded-tl-full opacity-80"></div>
                                        </div>
                                        {/* Grid overlay */}
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-20"></div>
                                    </div>
                                </div>

                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center gap-3 mb-2 text-sm">
                                        <span className="font-semibold text-slate-700">
                                            {format(new Date(event.startAt), 'MMM d, yyyy')}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                        <span className="text-slate-500">
                                            {event.eventType === 'Workshop' ? 'Workshop / Study Group' :
                                                event.eventType === 'Conference' ? 'Speaker Session / Tech Talk' :
                                                    'Community Event'}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary-blue transition-colors">
                                        {event.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-4">
                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4" />
                                            {format(new Date(event.startAt), 'h:mm a')} - {format(new Date(event.endAt), 'h:mm a')}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4" />
                                            {event.location}
                                        </div>
                                    </div>

                                    <p className="text-slate-600 mb-4 line-clamp-2">
                                        {event.description}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <button className="text-primary-blue font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                            View details <ArrowRight className="w-4 h-4" />
                                        </button>
                                        <button className="flex items-center gap-1 text-slate-500 text-sm hover:text-slate-800 px-3 py-1 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors">
                                            <Share2 className="w-3 h-3" /> Share
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default PublicEventsPage;
