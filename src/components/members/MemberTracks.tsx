import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Award, TrendingUp, Search, CheckCircle, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts';
import { mockTracks, mockTrackEnrollments, mockTrackModules } from '../../mockData';
import type { Track, TrackEnrollment } from '../../types';

const MemberTracks = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState<'enrolled' | 'available'>('enrolled');
    const [searchQuery, setSearchQuery] = useState('');

    if (!user) return null;

    // Get user's enrollments
    const userEnrollments = mockTrackEnrollments.filter(e => e.userId === user.id && e.status === 'active');
    const enrolledTrackIds = userEnrollments.map(e => e.trackId);

    // Get enrolled tracks with progress
    const enrolledTracks = userEnrollments.map(enrollment => {
        const track = mockTracks.find(t => t.id === enrollment.trackId);
        return { ...track, enrollment };
    }).filter(Boolean) as (Track & { enrollment: TrackEnrollment })[];

    // Get available tracks (not enrolled)
    const availableTracks = mockTracks.filter(t => !enrolledTrackIds.includes(t.id));

    // Filter tracks based on search
    const filterTracks = (tracks: Track[]) => {
        if (!searchQuery) return tracks;
        return tracks.filter(t =>
            t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.description.toLowerCase().includes(searchQuery.toLowerCase())
        );
    };

    const displayedTracks = activeTab === 'enrolled' ? filterTracks(enrolledTracks) : filterTracks(availableTracks);

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{ marginBottom: '32px' }}>
                <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#111827', marginBottom: '8px' }}>
                    My Learning Tracks
                </h1>
                <p style={{ color: '#6B7280' }}>
                    Track your progress and continue your learning journey
                </p>
            </div>

            {/* Stats Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        background: 'white',
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        padding: '20px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            background: '#DBEAFE',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <BookOpen size={20} color="#1A73E8" />
                        </div>
                        <div>
                            <p style={{ fontSize: '24px', fontWeight: '700', color: '#111827', margin: 0 }}>
                                {enrolledTracks.length}
                            </p>
                            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>Active Tracks</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    style={{
                        background: 'white',
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        padding: '20px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            background: '#D1FAE5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <CheckCircle size={20} color="#10B981" />
                        </div>
                        <div>
                            <p style={{ fontSize: '24px', fontWeight: '700', color: '#111827', margin: 0 }}>
                                {userEnrollments.reduce((sum, e) => sum + e.completedModules.length, 0)}
                            </p>
                            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>Completed Modules</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    style={{
                        background: 'white',
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        padding: '20px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            background: '#FEF3C7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <TrendingUp size={20} color="#F59E0B" />
                        </div>
                        <div>
                            <p style={{ fontSize: '24px', fontWeight: '700', color: '#111827', margin: 0 }}>
                                {enrolledTracks.length > 0 ? Math.round(enrolledTracks.reduce((sum, t) => sum + t.enrollment.progress, 0) / enrolledTracks.length) : 0}%
                            </p>
                            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>Avg Progress</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        background: 'white',
                        border: '1px solid #E5E7EB',
                        borderRadius: '12px',
                        padding: '20px'
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                        <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '8px',
                            background: '#FCE7F3',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Award size={20} color="#EC4899" />
                        </div>
                        <div>
                            <p style={{ fontSize: '24px', fontWeight: '700', color: '#111827', margin: 0 }}>
                                {userEnrollments.filter(e => e.status === 'completed').length}
                            </p>
                            <p style={{ fontSize: '12px', color: '#6B7280', margin: 0 }}>Certificates</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Search and Tabs */}
            <div style={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    {/* Tabs */}
                    <div style={{
                        display: 'flex',
                        gap: '8px',
                        background: '#F3F4F6',
                        padding: '4px',
                        borderRadius: '8px'
                    }}>
                        {(['enrolled', 'available'] as const).map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                style={{
                                    padding: '8px 16px',
                                    background: activeTab === tab ? 'white' : 'transparent',
                                    border: 'none',
                                    borderRadius: '6px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    color: activeTab === tab ? '#1A73E8' : '#6B7280',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s',
                                    boxShadow: activeTab === tab ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'
                                }}
                            >
                                {tab === 'enrolled' ? `My Tracks (${enrolledTracks.length})` : `Available (${availableTracks.length})`}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div style={{ position: 'relative', width: '300px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search tracks..."
                            style={{
                                width: '100%',
                                padding: '10px 12px 10px 40px',
                                border: '1px solid #E5E7EB',
                                borderRadius: '8px',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                    </div>
                </div>

                {/* Tracks Grid */}
                {displayedTracks.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                        {displayedTracks.map((track: any, index: number) => {
                            const isEnrolled = 'enrollment' in track;
                            const modules = mockTrackModules.filter(m => m.trackId === track.id);

                            return (
                                <motion.div
                                    key={track.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    style={{
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '12px',
                                        padding: '20px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    whileHover={{ boxShadow: '0 4px 12px rgba(0,0,0,0.1)', y: -4 }}
                                    onClick={() => navigate(isEnrolled ? `/members/tracks/${track.id}` : `/tracks/${track.id}`)}
                                >
                                    {/* Progress Bar (if enrolled) */}
                                    {isEnrolled && (
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: `${track.enrollment.progress}%`,
                                            height: '4px',
                                            background: 'linear-gradient(90deg, #1A73E8 0%, #10B981 100%)',
                                            transition: 'width 0.3s'
                                        }} />
                                    )}

                                    <div style={{ display: 'flex', gap: '16px' }}>
                                        {/* Icon */}
                                        <div style={{ fontSize: '48px' }}>{track.icon}</div>

                                        {/* Content */}
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '8px' }}>
                                                {track.title}
                                            </h3>
                                            <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: '12px', lineHeight: 1.5 }}>
                                                {track.description}
                                            </p>

                                            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#9CA3AF', marginBottom: '12px' }}>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                    <BookOpen size={14} /> {modules.length} modules
                                                </span>
                                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                    <Clock size={14} /> {track.estimatedDuration || '8 weeks'}
                                                </span>
                                            </div>

                                            {isEnrolled ? (
                                                <div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                                        <span style={{ fontSize: '12px', color: '#6B7280' }}>Progress</span>
                                                        <span style={{ fontSize: '12px', fontWeight: '600', color: '#1A73E8' }}>
                                                            {track.enrollment.progress}%
                                                        </span>
                                                    </div>
                                                    <div style={{
                                                        width: '100%',
                                                        height: '8px',
                                                        background: '#E5E7EB',
                                                        borderRadius: '4px',
                                                        overflow: 'hidden'
                                                    }}>
                                                        <div style={{
                                                            width: `${track.enrollment.progress}%`,
                                                            height: '100%',
                                                            background: 'linear-gradient(90deg, #1A73E8 0%, #10B981 100%)',
                                                            transition: 'width 0.3s'
                                                        }} />
                                                    </div>
                                                </div>
                                            ) : (
                                                <button
                                                    style={{
                                                        padding: '8px 16px',
                                                        background: '#1A73E8',
                                                        color: 'white',
                                                        border: 'none',
                                                        borderRadius: '6px',
                                                        fontSize: '13px',
                                                        fontWeight: '600',
                                                        cursor: 'pointer',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        gap: '6px'
                                                    }}
                                                >
                                                    <Play size={14} /> Enroll Now
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
                        <BookOpen size={48} style={{ margin: '0 auto 16px', opacity: 0.3, color: '#9CA3AF' }} />
                        <p style={{ fontSize: '16px', color: '#6B7280' }}>
                            {activeTab === 'enrolled' ? 'No enrolled tracks yet' : 'No tracks found'}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemberTracks;
