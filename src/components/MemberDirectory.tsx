import { mockUsers } from '../mockData';

const MemberDirectory = () => {
    return (
        <div className="container" style={{ padding: 'var(--space-8) var(--space-4)' }}>
            <div style={{ marginBottom: 'var(--space-8)' }}>
                <h1 style={{ fontSize: 'var(--font-size-h1)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-2)' }}>
                    👥 Member Directory
                </h1>
                <p style={{ color: '#6B7280' }}>
                    {mockUsers.length} active members
                </p>
            </div>

            <div className="grid grid-cols-3">
                {mockUsers.map(user => (
                    <div key={user.id} className="card">
                        <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                            <div style={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '50%',
                                background: 'var(--color-primary-blue)',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                fontWeight: 'var(--font-weight-bold)',
                                flexShrink: 0
                            }}>
                                {user.fullName.charAt(0)}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: 'var(--font-size-h3)', fontWeight: 'var(--font-weight-bold)', marginBottom: 'var(--space-1)' }}>
                                    {user.fullName}
                                </h3>
                                <p style={{ fontSize: 'var(--font-size-small)', color: '#6B7280', marginBottom: 'var(--space-1)' }}>
                                    {user.studentId}
                                </p>
                                <span className={`badge badge-${user.role === 'admin' ? 'error' : user.role === 'committee' ? 'warning' : 'primary'}`}>
                                    {user.role}
                                </span>
                            </div>
                        </div>
                        <div style={{ paddingTop: 'var(--space-4)', borderTop: '1px solid var(--color-light-gray)' }}>
                            <p style={{ fontSize: 'var(--font-size-small)', color: '#6B7280', marginBottom: 'var(--space-2)' }}>
                                📚 {user.department}
                            </p>
                            <p style={{ fontSize: 'var(--font-size-small)', color: '#6B7280', marginBottom: 'var(--space-2)' }}>
                                🎓 Year {user.yearOfStudy}
                            </p>
                            {user.profile?.duesStatus && (
                                <span className={`badge badge-${user.profile.duesStatus === 'current' ? 'success' : 'warning'}`}>
                                    {user.profile.duesStatus === 'current' ? '✓ Dues Paid' : '⚠ Dues Overdue'}
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MemberDirectory;
