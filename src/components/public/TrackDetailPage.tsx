import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, BookOpen, Users, CheckCircle, Award } from 'lucide-react';
import { mockTracks, mockTrackModules, mockUsers, mockTrackEnrollments } from '../../mockData';
import type { TrackModule } from '../../types';
import { useAuth } from '../../contexts';

const TrackDetailPage = () => {
    const { trackId } = useParams<{ trackId: string }>();
    const navigate = useNavigate();
    const { isAuthenticated, user } = useAuth();
    const [showJoinModal, setShowJoinModal] = useState(false);

    // Find the track
    const track = mockTracks.find(t => t.id === trackId);

    // Get modules for this track
    const modules = mockTrackModules.filter(m => m.trackId === trackId);

    // Get track lead
    const trackLead = track?.leadId ? mockUsers.find(u => u.id === track.leadId) : null;

    // Check if user is enrolled
    const isEnrolled = user ? mockTrackEnrollments.some(
        e => e.userId === user.id && e.trackId === trackId && e.status === 'active'
    ) : false;

    if (!track) {
        return (
            <div style={{ padding: '100px 20px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '24px', color: '#111827', marginBottom: '16px' }}>
                    Track Not Found
                </h2>
                <button
                    onClick={() => navigate('/tracks')}
                    style={{
                        padding: '12px 24px',
                        background: '#1A73E8',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    Back to Tracks
                </button>
            </div>
        );
    }

    const handleJoinTrack = () => {
        if (!isAuthenticated) {
            navigate('/login', { state: { returnTo: `/tracks/${trackId}` } });
        } else {
            setShowJoinModal(true);
        }
    };

    const confirmJoin = () => {
        // In real app, this would call an API
        alert(`Successfully enrolled in ${track.title}!`);
        setShowJoinModal(false);
        navigate('/members/tracks');
    };

    return (
        <div style={{ minHeight: '100vh', background: '#F9FAFB' }}>
            {/* Hero Section */}
            <div style={{
                background: 'linear-gradient(135deg, #1A73E8 0%, #0B5FFF 100%)',
                color: 'white',
                padding: '80px 20px 60px'
            }}>
                <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <button
                        onClick={() => navigate('/tracks')}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            background: 'rgba(255,255,255,0.2)',
                            border: 'none',
                            color: 'white',
                            padding: '8px 16px',
                            borderRadius: '6px',
                            cursor: 'pointer',
                            marginBottom: '24px',
                            fontSize: '14px'
                        }}
                    >
                        <ArrowLeft size={16} /> Back to All Tracks
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '24px' }}>
                        <div style={{ fontSize: '64px' }}>{track.icon}</div>
                        <div>
                            <h1 style={{ fontSize: '42px', fontWeight: '700', margin: '0 0 12px 0' }}>
                                {track.title}
                            </h1>
                            <p style={{ fontSize: '18px', opacity: 0.9, margin: 0 }}>
                                {track.description}
                            </p>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        gap: '32px',
                        flexWrap: 'wrap',
                        marginTop: '32px'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Clock size={20} />
                            <span>{track.estimatedDuration || '8 weeks'}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <BookOpen size={20} />
                            <span>{modules.length} Modules</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Users size={20} />
                            <span>{track.enrollmentCount || 0} Students Enrolled</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Award size={20} />
                            <span style={{ textTransform: 'capitalize' }}>{track.difficultyLevel || 'Intermediate'}</span>
                        </div>
                    </div>

                    {!isEnrolled && (
                        <button
                            onClick={handleJoinTrack}
                            style={{
                                marginTop: '32px',
                                padding: '14px 32px',
                                background: 'white',
                                color: '#1A73E8',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '16px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                transition: 'transform 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            {isAuthenticated ? 'Enroll in This Track' : 'Login to Enroll'}
                        </button>
                    )}
                    {isEnrolled && (
                        <div style={{
                            marginTop: '32px',
                            padding: '12px 24px',
                            background: 'rgba(52, 211, 153, 0.2)',
                            borderRadius: '8px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px'
                        }}>
                            <CheckCircle size={20} color="#10B981" />
                            <span>You're enrolled in this track</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Main Content */}
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '40px' }}>
                    {/* Left Column - Modules */}
                    <div>
                        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#111827', marginBottom: '24px' }}>
                            What You'll Learn
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {modules.length > 0 ? (
                                modules.map((module: TrackModule, index: number) => (
                                    <motion.div
                                        key={module.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        style={{
                                            background: 'white',
                                            border: '1px solid #E5E7EB',
                                            borderRadius: '8px',
                                            padding: '20px',
                                            display: 'flex',
                                            gap: '16px'
                                        }}
                                    >
                                        <div style={{
                                            minWidth: '40px',
                                            height: '40px',
                                            background: '#EEF2FF',
                                            borderRadius: '50%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#1A73E8',
                                            fontWeight: '600'
                                        }}>
                                            {module.order}
                                        </div>
                                        <div style={{ flex: 1 }}>
                                            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', margin: '0 0 8px 0' }}>
                                                {module.title}
                                            </h3>
                                            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 8px 0' }}>
                                                {module.description}
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#9CA3AF' }}>
                                                <Clock size={14} />
                                                <span>{module.duration}</span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                <div style={{ padding: '40px', textAlign: 'center', color: '#6B7280' }}>
                                    <BookOpen size={48} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
                                    <p>Course modules coming soon!</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Track Info */}
                    <div>
                        {/* Track Lead */}
                        {trackLead && (
                            <div style={{
                                background: 'white',
                                border: '1px solid #E5E7EB',
                                borderRadius: '8px',
                                padding: '24px',
                                marginBottom: '24px'
                            }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                                    Track Lead
                                </h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '50%',
                                        background: '#1A73E8',
                                        color: 'white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '18px',
                                        fontWeight: '600'
                                    }}>
                                        {trackLead.fullName.charAt(0)}
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '600', color: '#111827' }}>
                                            {trackLead.fullName}
                                        </div>
                                        <div style={{ fontSize: '14px', color: '#6B7280' }}>
                                            {trackLead.department}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Track Stats */}
                        <div style={{
                            background: 'white',
                            border: '1px solid #E5E7EB',
                            borderRadius: '8px',
                            padding: '24px'
                        }}>
                            <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#111827', marginBottom: '16px' }}>
                                Track Information
                            </h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#6B7280' }}>Category</span>
                                    <span style={{ fontWeight: '500', textTransform: 'capitalize' }}>{track.category}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#6B7280' }}>Level</span>
                                    <span style={{ fontWeight: '500', textTransform: 'capitalize' }}>{track.difficultyLevel || 'Intermediate'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#6B7280' }}>Duration</span>
                                    <span style={{ fontWeight: '500' }}>{track.estimatedDuration || '8 weeks'}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ color: '#6B7280' }}>Modules</span>
                                    <span style={{ fontWeight: '500' }}>{modules.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Join Modal */}
            {showJoinModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(0,0,0,0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000
                }}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{
                            background: 'white',
                            borderRadius: '12px',
                            padding: '32px',
                            maxWidth: '400px',
                            width: '90%'
                        }}
                    >
                        <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#111827', marginBottom: '12px' }}>
                            Enroll in {track.title}?
                        </h3>
                        <p style={{ color: '#6B7280', marginBottom: '24px' }}>
                            You're about to enroll in this track. You'll get access to all modules and can track your progress.
                        </p>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button
                                onClick={() => setShowJoinModal(false)}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    background: '#F3F4F6',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: '500'
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmJoin}
                                style={{
                                    flex: 1,
                                    padding: '12px',
                                    background: '#1A73E8',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: '600'
                                }}
                            >
                                Confirm Enrollment
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
};

export default TrackDetailPage;
