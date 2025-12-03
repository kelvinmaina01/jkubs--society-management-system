import { useState } from 'react';
import { mockAnnouncements, mockUsers } from '../mockData';
import type { Announcement } from '../types';
import AnnouncementCreateModal from './admin/AnnouncementCreateModal';

const AnnouncementList = () => {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    const getAuthorName = (userId: string) => {
        const user = mockUsers.find(u => u.id === userId);
        return user?.fullName || 'Unknown';
    };

    const handleCreateAnnouncement = (announcementData: Partial<Announcement>) => {
        console.log('Creating announcement:', announcementData);
        // In a real app, this would make an API call
        setIsCreateModalOpen(false);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const pinnedAnnouncements = mockAnnouncements.filter(a => a.pinned);
    const regularAnnouncements = mockAnnouncements.filter(a => !a.pinned);

    return (
        <div className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-8)' }}>
                <div>
                    <h1 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-2)' }}>
                        📢 Announcements
                    </h1>
                    <p style={{ color: '#6B7280' }}>
                        Stay updated with society news
                    </p>
                </div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="btn btn-primary btn-lg"
                >
                    ➕ New Announcement
                </button>
            </div>

            {pinnedAnnouncements.length > 0 && (
                <div style={{ marginBottom: 'var(--space-8)' }}>
                    <h2 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                        📌 Pinned Announcements
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        {pinnedAnnouncements.map(announcement => (
                            <div key={announcement.id} className="card" style={{ borderLeft: '4px solid var(--color-accent-cyan)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                                    <h3 style={{ fontSize: 'var(--font-size-h2)', fontWeight: 'var(--font-weight-bold)', margin: 0 }}>
                                        {announcement.title}
                                    </h3>
                                    <span className="badge badge-info">📌 Pinned</span>
                                </div>
                                <p style={{ fontSize: 'var(--font-size-body)', color: '#374151', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
                                    {announcement.body}
                                </p>
                                <div style={{ display: 'flex', gap: 'var(--space-6)', fontSize: 'var(--font-size-small)', color: '#6B7280' }}>
                                    <span>👤 {getAuthorName(announcement.publishedBy)}</span>
                                    <span>📅 {formatDate(announcement.publishedAt)}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div>
                <h2 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-4)' }}>
                    Recent Announcements
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                    {regularAnnouncements.map(announcement => (
                        <div key={announcement.id} className="card">
                            <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-3)' }}>
                                {announcement.title}
                            </h3>
                            <p style={{ fontSize: 'var(--font-size-body)', color: '#374151', lineHeight: 1.6, marginBottom: 'var(--space-4)' }}>
                                {announcement.body}
                            </p>
                            <div style={{ display: 'flex', gap: 'var(--space-6)', fontSize: 'var(--font-size-small)', color: '#6B7280' }}>
                                <span>👤 {getAuthorName(announcement.publishedBy)}</span>
                                <span>📅 {formatDate(announcement.publishedAt)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <AnnouncementCreateModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSubmit={handleCreateAnnouncement}
            />
        </div>
    );
};

export default AnnouncementList;
