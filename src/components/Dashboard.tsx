import type { DashboardStats, Event, Announcement, User } from '../types';

interface DashboardProps {
    stats: DashboardStats;
    events: Event[];
    announcements: Announcement[];
    user: User;
}

const Dashboard = ({ stats, events, announcements, user }: DashboardProps) => {
    const isExec = ['admin', 'chairman', 'secretary', 'treasurer'].includes(user.role);

    const StatCard = ({ title, value, icon, trend, color }: any) => (
        <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                background: `var(--color-${color}-light, #F3F4F6)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                color: `var(--color-${color})`
            }}>
                {icon}
            </div>
            <div>
                <p style={{ color: '#6B7280', fontSize: 'var(--font-size-small)', marginBottom: 'var(--space-1)' }}>
                    {title}
                </p>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>
                    {value}
                </h3>
                {trend && (
                    <span style={{ fontSize: 'var(--font-size-xs)', color: '#10B981' }}>
                        {trend}
                    </span>
                )}
            </div>
        </div>
    );

    return (
        <div className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h1 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                    Welcome back, {user.fullName.split(' ')[0]}! 👋
                </h1>
                <p style={{ color: '#6B7280' }}>
                    {isExec
                        ? 'Here is what is happening in the society today.'
                        : 'Here are your upcoming events and updates.'}
                </p>
            </div>

            {/* Stats Grid - Different for Execs vs Members */}
            <div className="grid grid-cols-4" style={{ gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
                {isExec ? (
                    <>
                        <StatCard title="Total Members" value={stats.totalMembers} icon="👥" trend="+12% this month" color="primary-blue" />
                        <StatCard title="Active Members" value={stats.activeMembers} icon="✨" trend="79% retention" color="success" />
                        <StatCard title="Dues Collected" value={`KES ${stats.duesCollected.toLocaleString()}`} icon="💰" trend="+5% vs last sem" color="warning" />
                        <StatCard title="Upcoming Events" value={stats.upcomingEvents} icon="📅" color="info" />
                    </>
                ) : (
                    <>
                        <StatCard title="My Events" value="2" icon="📅" color="primary-blue" />
                        <StatCard title="Dues Status" value={user.profile?.duesStatus === 'current' ? 'Paid' : 'Pending'} icon="💰" color={user.profile?.duesStatus === 'current' ? 'success' : 'error'} />
                        <StatCard title="Attendance" value="85%" icon="📊" color="info" />
                        <StatCard title="Points" value="120" icon="⭐" color="warning" />
                    </>
                )}
            </div>

            <div className="grid grid-cols-3" style={{ gap: 'var(--space-8)' }}>
                {/* Main Content Area */}
                <div style={{ gridColumn: 'span 2' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                        <h2 style={{ fontSize: 'var(--font-size-h2)', fontWeight: 'bold' }}>
                            {isExec ? 'Recent Activity' : 'My Schedule'}
                        </h2>
                        <button className="btn btn-ghost" style={{ color: 'var(--color-primary-blue)' }}>View All</button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        {events.slice(0, 3).map(event => (
                            <div key={event.id} className="card" style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center' }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: 'var(--radius-md)',
                                    background: 'var(--color-light-gray)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #E5E7EB'
                                }}>
                                    <span style={{ fontSize: '12px', color: '#EF4444', fontWeight: 'bold', textTransform: 'uppercase' }}>
                                        {new Date(event.startAt).toLocaleString('default', { month: 'short' })}
                                    </span>
                                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1F2937' }}>
                                        {new Date(event.startAt).getDate()}
                                    </span>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ fontWeight: 'bold', marginBottom: 'var(--space-1)' }}>{event.title}</h3>
                                    <p style={{ fontSize: '14px', color: '#6B7280' }}>
                                        {new Date(event.startAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {event.location}
                                    </p>
                                </div>
                                <button className="btn btn-outline btn-sm">Details</button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar - Announcements */}
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)' }}>
                        <h2 style={{ fontSize: 'var(--font-size-h2)', fontWeight: 'bold' }}>Announcements</h2>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                        {announcements.slice(0, 3).map(announcement => (
                            <div key={announcement.id} className="card" style={{ borderLeft: announcement.pinned ? '4px solid var(--color-primary-blue)' : 'none' }}>
                                {announcement.pinned && (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)', marginBottom: 'var(--space-2)' }}>
                                        <span style={{ fontSize: '12px' }}>📌</span>
                                        <span style={{ fontSize: '12px', color: '#6B7280', fontWeight: 'bold' }}>PINNED</span>
                                    </div>
                                )}
                                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: 'var(--space-2)' }}>
                                    {announcement.title}
                                </h3>
                                <p style={{ fontSize: '14px', color: '#6B7280', marginBottom: 'var(--space-3)', lineHeight: 1.5 }}>
                                    {announcement.body}
                                </p>
                                <span style={{ fontSize: '12px', color: '#9CA3AF' }}>
                                    {new Date(announcement.publishedAt).toLocaleDateString()}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
