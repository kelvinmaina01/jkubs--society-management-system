import { useState } from 'react';

import type { DashboardStats, Event, Announcement, User } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { Permission } from '../utils/permissions';
import MemberApprovalQueue from './admin/MemberApprovalQueue';
import UserManagement from './admin/UserManagement';
import Button from './ui/Button';
import Card from './ui/Card';
import Modal from './ui/Modal';
import { Plus, Calendar, Users, DollarSign } from 'lucide-react';
import { useNotification } from '../contexts/NotificationContext';

interface DashboardProps {
    stats: DashboardStats;
    events: Event[];
    announcements: Announcement[];
    user: User;
}

const Dashboard = ({ stats, events, announcements: initialAnnouncements, user }: DashboardProps) => {
    const { hasPermission } = useAuth();
    const { success: notifySuccess } = useNotification();
    const [announcements, setAnnouncements] = useState(initialAnnouncements);
    const [isAnnouncementModalOpen, setIsAnnouncementModalOpen] = useState(false);
    const [newAnnouncement, setNewAnnouncement] = useState({ title: '', body: '' });

    const isExec = ['super_admin', 'executive_admin'].includes(user.role);
    const canManageUsers = hasPermission(Permission.MANAGE_USERS);
    const canApproveMembers = hasPermission(Permission.APPROVE_MEMBERS);
    const canCreateAnnouncement = hasPermission(Permission.CREATE_ANNOUNCEMENT);

    const handleCreateAnnouncement = () => {
        if (!newAnnouncement.title || !newAnnouncement.body) return;

        const announcement: Announcement = {
            id: Date.now().toString(),
            title: newAnnouncement.title,
            body: newAnnouncement.body,
            publishedBy: user.id,
            publishedAt: new Date().toISOString(),
            pinned: false,
            author: user
        };

        setAnnouncements([announcement, ...announcements]);
        notifySuccess('Announcement published successfully');
        setIsAnnouncementModalOpen(false);
        setNewAnnouncement({ title: '', body: '' });
    };

    const StatCard = ({ title, value, icon, trend, color }: any) => (
        <Card hoverEffect noPadding className="h-full">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px' }}>
                <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: `var(--color-${color}-light, #F3F4F6)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: `var(--color-${color})`
                }}>
                    {icon}
                </div>
                <div>
                    <p style={{ color: 'var(--color-text-secondary)', fontSize: '14px', marginBottom: '4px' }}>
                        {title}
                    </p>
                    <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, color: 'var(--color-text-primary)' }}>
                        {value}
                    </h3>
                    {trend && (
                        <span style={{ fontSize: '12px', color: '#10B981', display: 'block', marginTop: '4px' }}>
                            {trend}
                        </span>
                    )}
                </div>
            </div>
        </Card>
    );

    return (
        <div className="container" style={{ padding: '32px 16px', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--color-text-primary)' }}>
                        Welcome back, {user.fullName.split(' ')[0]}! 👋
                    </h1>
                    <p style={{ color: 'var(--color-text-secondary)' }}>
                        {isExec
                            ? 'Here is what is happening in the society today.'
                            : 'Here are your upcoming events and updates.'}
                    </p>
                </div>
                {canCreateAnnouncement && (
                    <Button
                        leftIcon={<Plus size={18} />}
                        onClick={() => setIsAnnouncementModalOpen(true)}
                    >
                        New Announcement
                    </Button>
                )}
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '32px' }}>
                {isExec ? (
                    <>
                        <StatCard title="Total Members" value={stats.totalMembers} icon={<Users size={24} />} trend="+12% this month" color="primary-blue" />
                        <StatCard title="Active Members" value={stats.activeMembers} icon={<Users size={24} />} trend="79% retention" color="success" />
                        <StatCard title="Dues Collected" value={`KES ${stats.duesCollected.toLocaleString()}`} icon={<DollarSign size={24} />} trend="+5% vs last sem" color="warning" />
                        <StatCard title="Upcoming Events" value={stats.upcomingEvents} icon={<Calendar size={24} />} color="info" />
                    </>
                ) : (
                    <>
                        <StatCard title="My Events" value="2" icon={<Calendar size={24} />} color="primary-blue" />
                        <StatCard title="Dues Status" value={user.profile?.duesStatus === 'current' ? 'Paid' : 'Pending'} icon={<DollarSign size={24} />} color={user.profile?.duesStatus === 'current' ? 'success' : 'error'} />
                        <StatCard title="Attendance" value="85%" icon={<Users size={24} />} color="info" />
                        <StatCard title="Points" value="120" icon={<Users size={24} />} color="warning" />
                    </>
                )}
            </div>

            {/* Admin Sections */}
            {canApproveMembers && (
                <div style={{ marginBottom: '32px' }}>
                    <MemberApprovalQueue />
                </div>
            )}

            {canManageUsers && (
                <div style={{ marginBottom: '32px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>User Management</h2>
                    </div>
                    <UserManagement />
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
                {/* Main Content Area */}
                <div style={{ gridColumn: 'span 2' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>
                            {isExec ? 'Recent Activity' : 'My Schedule'}
                        </h2>
                        <Button variant="ghost">View All</Button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {events.slice(0, 3).map(event => (
                            <Card key={event.id} hoverEffect noPadding>
                                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', padding: '16px' }}>
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '12px',
                                        background: 'var(--color-bg-secondary)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        border: '1px solid var(--color-border)'
                                    }}>
                                        <span style={{ fontSize: '12px', color: '#EF4444', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                            {new Date(event.startAt).toLocaleString('default', { month: 'short' })}
                                        </span>
                                        <span style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>
                                            {new Date(event.startAt).getDate()}
                                        </span>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontWeight: 'bold', marginBottom: '4px', color: 'var(--color-text-primary)' }}>{event.title}</h3>
                                        <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                                            {new Date(event.startAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {event.location}
                                        </p>
                                    </div>
                                    <Button variant="outline" size="sm">Details</Button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Sidebar - Announcements */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: 'var(--color-text-primary)' }}>Announcements</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {announcements.slice(0, 3).map(announcement => (
                            <Card key={announcement.id} style={{ borderLeft: announcement.pinned ? '4px solid var(--color-primary-blue)' : 'none' }}>
                                {announcement.pinned && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
                                        <span style={{ fontSize: '12px' }}>📌</span>
                                        <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', fontWeight: 'bold' }}>PINNED</span>
                                    </div>
                                )}
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px', color: 'var(--color-text-primary)' }}>
                                    {announcement.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: 'var(--color-text-secondary)', marginBottom: '12px', lineHeight: 1.5 }}>
                                    {announcement.body}
                                </p>
                                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', opacity: 0.7 }}>
                                    {new Date(announcement.publishedAt).toLocaleDateString()}
                                </span>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Create Announcement Modal */}
            <Modal
                isOpen={isAnnouncementModalOpen}
                onClose={() => setIsAnnouncementModalOpen(false)}
                title="Create Announcement"
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Title</label>
                        <input
                            type="text"
                            value={newAnnouncement.title}
                            onChange={(e) => setNewAnnouncement({ ...newAnnouncement, title: e.target.value })}
                            placeholder="e.g., General Meeting Reminder"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '8px',
                                border: '1px solid var(--color-border)',
                                background: 'var(--color-bg-secondary)',
                                color: 'var(--color-text-primary)'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontWeight: 500 }}>Message</label>
                        <textarea
                            value={newAnnouncement.body}
                            onChange={(e) => setNewAnnouncement({ ...newAnnouncement, body: e.target.value })}
                            placeholder="Type your announcement here..."
                            rows={4}
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '8px',
                                border: '1px solid var(--color-border)',
                                background: 'var(--color-bg-secondary)',
                                color: 'var(--color-text-primary)',
                                resize: 'vertical'
                            }}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px' }}>
                        <Button variant="ghost" onClick={() => setIsAnnouncementModalOpen(false)}>Cancel</Button>
                        <Button onClick={handleCreateAnnouncement}>Publish</Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default Dashboard;
